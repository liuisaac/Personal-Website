import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

export default class SceneInit {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  fov: number;
  nearPlane: number;
  farPlane: number;
  canvasId!: string;
  clock: THREE.Clock;
  stats: Stats;
  controls: OrbitControls;
  ambientLight: THREE.AmbientLight;
  directionalLight: THREE.DirectionalLight;

  constructor(canvasId: string) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      (this.fov = 30),
      window.innerWidth / window.innerHeight,
      (this.nearPlane = 1),
      (this.farPlane = 1000)
    );
    this.camera.position.set(200, 80, 20);

    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.minPolarAngle = this.controls.maxPolarAngle = Math.PI/2;
    this.controls.enableDamping; this.controls.dampingFactor = 10;
    this.controls.autoRotate = true; this.controls.autoRotateSpeed = 0;

    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    this.directionalLight.position.set(0, 32, 64);
    this.scene.add(this.directionalLight);


    window.addEventListener('resize', () => this.onWindowResize(), false);
  }

  initialize(): void {
    // NOTE: Load space background.
    // this.loader = new THREE.TextureLoader();
    // this.scene.background = this.loader.load('./pics/space.jpeg');

    // NOTE: Declare uniforms to pass into glsl shaders.
    // this.uniforms = {
    //   u_time: { type: 'f', value: 1.0 },
    //   colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
    //   colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
    // };
  }

  animate(): void {
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.stats.update();
    this.controls.update();
  }

  render(): void {
    // NOTE: Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
