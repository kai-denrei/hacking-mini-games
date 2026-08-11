import * as THREE from 'three';

// The dotted-halftone look, ported from Braille's CPU pipeline to a GPU point
// shader. Braille did: orthographic project -> depth drives grayscale + radius
// -> z-sort -> paint ctx.arc. Here THREE.Points does the projection, the
// vertex shader maps view-depth to point size + ink, the fragment shader draws
// a soft round dot, and the depth buffer replaces the manual z-sort (opaque
// occlusion is correct for free).

export interface HalftoneOptions {
  /** Point size (px) for the nearest dots. */
  sizeNear?: number;
  /** Point size (px) for the farthest dots. */
  sizeFar?: number;
  /** Grayscale ink (0..1) for the nearest dots. */
  inkNear?: number;
  /** Grayscale ink (0..1) for the farthest dots. */
  inkFar?: number;
  /** Cloud radius, used to normalize depth about the focus point. */
  radius?: number;
  pixelRatio?: number;
  /** How much a point's emphasis (0..1) brightens it. */
  emphasisGain?: number;
  /** Color of the momentary "found" flash. */
  flashColor?: number;
  /** Color of extracted (picked) points. */
  pickedColor?: number;
}

const VERT = /* glsl */ `
  uniform float uSizeNear;
  uniform float uSizeFar;
  uniform float uInkNear;
  uniform float uInkFar;
  uniform float uRadius;
  uniform float uFocusDepth;
  uniform float uPixelRatio;
  uniform highp float uFlash; // 0..1 momentary "found" bloom (precision pinned: shared with frag)
  attribute float emphasis;   // per-point highlight; <0 dims, >0 brightens
  attribute float picked;     // 1 = extracted (locked in)
  varying float vInk;
  varying float vEmph;
  varying float vPicked;

  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float viewZ = -mv.z;                       // distance in front of camera
    float depth01 = clamp(
      (viewZ - (uFocusDepth - uRadius)) / (2.0 * uRadius),
      0.0, 1.0
    );                                          // 0 = nearest, 1 = farthest
    vInk = mix(uInkNear, uInkFar, depth01);
    vEmph = emphasis;
    vPicked = picked;
    float hi = max(max(emphasis, 0.0), picked);
    float bloom = 1.0 + 0.6 * hi + uFlash * max(emphasis, 0.0) * 1.1;
    gl_PointSize = mix(uSizeNear, uSizeFar, depth01) * uPixelRatio * bloom;
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  precision mediump float;
  uniform float uEmphasisGain;
  uniform highp float uFlash;  // precision pinned to match the vertex shader
  uniform vec3 uFlashColor;
  uniform vec3 uPickedColor;
  varying float vInk;
  varying float vEmph;
  varying float vPicked;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float alpha = 1.0 - smoothstep(0.44, 0.5, d);   // soft round dot (AA edge)
    if (alpha <= 0.0) discard;
    float ink = clamp(vInk + uEmphasisGain * max(vEmph, vPicked), 0.0, 1.0);
    vec3 col = mix(vec3(ink), uFlashColor, clamp(vEmph, 0.0, 1.0) * uFlash);
    col = mix(col, uPickedColor, vPicked);          // extracted points read as locked-in
    gl_FragColor = vec4(col, alpha);
  }
`;

export class HalftoneCloud {
  readonly points: THREE.Points;
  readonly material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;

  constructor(positions: Float32Array, opts: HalftoneOptions = {}) {
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute(
      'emphasis',
      new THREE.BufferAttribute(new Float32Array(positions.length / 3), 1),
    );
    this.geometry.setAttribute(
      'picked',
      new THREE.BufferAttribute(new Float32Array(positions.length / 3), 1),
    );

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uSizeNear: { value: opts.sizeNear ?? 7 },
        uSizeFar: { value: opts.sizeFar ?? 3 },
        uInkNear: { value: opts.inkNear ?? 0.95 },
        uInkFar: { value: opts.inkFar ?? 0.22 },
        uRadius: { value: opts.radius ?? 1 },
        uFocusDepth: { value: 4 },
        uPixelRatio: { value: opts.pixelRatio ?? 1 },
        uEmphasisGain: { value: opts.emphasisGain ?? 0.85 },
        uFlash: { value: 0 },
        uFlashColor: { value: new THREE.Color(opts.flashColor ?? 0xffcf6a) },
        uPickedColor: { value: new THREE.Color(opts.pickedColor ?? 0x6fe0b8) },
      },
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthTest: true,
      depthWrite: true,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
  }

  setPositions(positions: Float32Array): void {
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.attributes.position!.needsUpdate = true;
  }

  /** In-place position update (same length) — cheap enough to call per frame. */
  updatePositions(positions: Float32Array): void {
    const attr = this.geometry.getAttribute('position') as THREE.BufferAttribute;
    (attr.array as Float32Array).set(positions);
    attr.needsUpdate = true;
  }

  /** In-place per-point emphasis update (dims if <0, brightens if >0). */
  updateEmphasis(emphasis: Float32Array): void {
    const attr = this.geometry.getAttribute('emphasis') as THREE.BufferAttribute;
    (attr.array as Float32Array).set(emphasis);
    attr.needsUpdate = true;
  }

  /** Momentary "found" bloom intensity (0..1) on emphasized points. */
  setFlash(v: number): void {
    this.material.uniforms.uFlash!.value = v;
  }

  /** In-place per-point picked flag (1 = extracted). */
  updatePicked(picked: Float32Array): void {
    const attr = this.geometry.getAttribute('picked') as THREE.BufferAttribute;
    (attr.array as Float32Array).set(picked);
    attr.needsUpdate = true;
  }

  /** Keep depth normalization centered on the orbit target each frame. */
  sync(camera: THREE.Camera, target: THREE.Vector3, pixelRatio: number): void {
    this.material.uniforms.uFocusDepth!.value = camera.position.distanceTo(target);
    this.material.uniforms.uPixelRatio!.value = pixelRatio;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}
