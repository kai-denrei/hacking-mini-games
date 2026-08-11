import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { HalftoneCloud } from './render/halftone';
import { fibSphere } from './geometry/fib';

// Scaffold bootstrap: an orbiting dotted-halftone sphere. This proves the
// renderer + the ORBIT verb end-to-end before any game logic. CONSTELLATION
// (the first game) builds on exactly this pipeline.

const canvas = document.getElementById('scene') as HTMLCanvasElement;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x08080d, 1);

const scene = new THREE.Scene();
const target = new THREE.Vector3(0, 0, 0);

// Orthographic — matches Braille's no-perspective aesthetic; depth is conveyed
// purely by the halftone ink + size ramp, not by perspective foreshortening.
const FRUSTUM_HALF = 1.6;
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 100);
camera.position.set(0, 0, 4);
camera.lookAt(target);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.6;
controls.target.copy(target);

const cloud = new HalftoneCloud(fibSphere(1400, 1), {
  radius: 1,
  pixelRatio: renderer.getPixelRatio(),
});
scene.add(cloud.points);

function resize(): void {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h);
  const aspect = w / h;
  camera.left = -FRUSTUM_HALF * aspect;
  camera.right = FRUSTUM_HALF * aspect;
  camera.top = FRUSTUM_HALF;
  camera.bottom = -FRUSTUM_HALF;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

function loop(): void {
  controls.update();
  cloud.sync(camera, controls.target, renderer.getPixelRatio());
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}
loop();
