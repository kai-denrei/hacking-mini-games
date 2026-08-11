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
}

const VERT = /* glsl */ `
  uniform float uSizeNear;
  uniform float uSizeFar;
  uniform float uInkNear;
  uniform float uInkFar;
  uniform float uRadius;
  uniform float uFocusDepth;
  uniform float uPixelRatio;
  varying float vInk;

  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float viewZ = -mv.z;                       // distance in front of camera
    float depth01 = clamp(
      (viewZ - (uFocusDepth - uRadius)) / (2.0 * uRadius),
      0.0, 1.0
    );                                          // 0 = nearest, 1 = farthest
    vInk = mix(uInkNear, uInkFar, depth01);
    gl_PointSize = mix(uSizeNear, uSizeFar, depth01) * uPixelRatio;
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  precision mediump float;
  varying float vInk;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float alpha = 1.0 - smoothstep(0.44, 0.5, d);   // soft round dot (AA edge)
    if (alpha <= 0.0) discard;
    gl_FragColor = vec4(vec3(vInk), alpha);
  }
`;

export class HalftoneCloud {
  readonly points: THREE.Points;
  readonly material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;

  constructor(positions: Float32Array, opts: HalftoneOptions = {}) {
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uSizeNear: { value: opts.sizeNear ?? 7 },
        uSizeFar: { value: opts.sizeFar ?? 3 },
        uInkNear: { value: opts.inkNear ?? 0.95 },
        uInkFar: { value: opts.inkFar ?? 0.22 },
        uRadius: { value: opts.radius ?? 1 },
        uFocusDepth: { value: 4 },
        uPixelRatio: { value: opts.pixelRatio ?? 1 },
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
