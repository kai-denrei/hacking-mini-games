import * as THREE from 'three';

// A general colored-dot renderer: round points with per-point RGB + size +
// alpha, rebuilt each frame via begin()/dot()/commit(). Used by TRANSFER (a 2D
// dot circuit with two-colour ownership — the halftone cloud shader is
// monochrome by design, so this is its colour-capable sibling).

const VERT = /* glsl */ `
  attribute vec3 color;
  attribute float size;
  attribute float alpha;
  uniform float uPixelRatio;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vColor = color;
    vAlpha = alpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * uPixelRatio;
    gl_Position = projectionMatrix * mv;
  }
`;
const FRAG = /* glsl */ `
  precision mediump float;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float a = (1.0 - smoothstep(0.44, 0.5, d)) * vAlpha;
    if (a <= 0.0) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;

export class DotField {
  readonly points: THREE.Points;
  private material: THREE.ShaderMaterial;
  private geo: THREE.BufferGeometry;
  private pos: Float32Array;
  private col: Float32Array;
  private sz: Float32Array;
  private al: Float32Array;
  private cap: number;
  private n = 0;

  constructor(capacity: number, opts: { additive?: boolean } = {}) {
    this.cap = capacity;
    this.pos = new Float32Array(capacity * 3);
    this.col = new Float32Array(capacity * 3);
    this.sz = new Float32Array(capacity);
    this.al = new Float32Array(capacity);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    this.geo.setAttribute('size', new THREE.BufferAttribute(this.sz, 1));
    this.geo.setAttribute('alpha', new THREE.BufferAttribute(this.al, 1));
    this.material = new THREE.ShaderMaterial({
      uniforms: { uPixelRatio: { value: 1 } },
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: opts.additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(this.geo, this.material);
    this.points.frustumCulled = false;
  }

  begin(): void {
    this.n = 0;
  }

  dot(x: number, y: number, r: number, g: number, b: number, size: number, alpha = 1): void {
    if (this.n >= this.cap) return;
    const i = this.n++;
    this.pos[i * 3] = x;
    this.pos[i * 3 + 1] = y;
    this.pos[i * 3 + 2] = 0;
    this.col[i * 3] = r;
    this.col[i * 3 + 1] = g;
    this.col[i * 3 + 2] = b;
    this.sz[i] = size;
    this.al[i] = alpha;
  }

  commit(pixelRatio: number): void {
    this.material.uniforms.uPixelRatio!.value = pixelRatio;
    (['position', 'color', 'size', 'alpha'] as const).forEach((name) => {
      (this.geo.getAttribute(name) as THREE.BufferAttribute).needsUpdate = true;
    });
    this.geo.setDrawRange(0, this.n);
  }

  dispose(): void {
    this.geo.dispose();
    this.material.dispose();
  }
}
