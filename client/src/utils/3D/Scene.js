import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

/**
 * @typedef DebugOptions
 * @type {object}
 * @property {boolean} axis
 * @property {number} axisSize
 * @property {boolean} stats
 */

/**
 * @typedef OrbitalControlsOptions
 * @type {object}
 * @property {boolean} enable
 * @property {number} maxDistance
 * @property {number} minDistance
 * @property {number} maxZoom
 * @property {number} minZoom
 */

export class Scene {
  /**
   * Creates a new scene where 3D objects can be displayed.
   * @param {import("./Renderer").Renderer} renderer
   * @param {object} [options]
   * @param {DebugOptions} [options.debug]
   * @param {OrbitalControlsOptions} [options.orbitalControls]
   */
  constructor(renderer, options) {
    /**
     * @type {import("./Renderer").Renderer}
     */
    this._renderer = renderer;

    /**
     * @type {THREE.Scene}
     */
    this._scene = new THREE.Scene();

    /**
     * @type {THREE.PerspectiveCamera}
     */
    this._camera = new THREE.PerspectiveCamera(
      60,
      this._renderer.aspectRatio,
      0.1,
      1000
    );

    /**
     * @type {import("./Sphere").Sphere[]}
     */
    this._spheres = [];

    options = Object.assign(
      {
        debug: { axis: false, axisSize: 10, stats: false },
        orbitalControls: {
          enable: true,
          maxDistance: Infinity,
          minDistance: 0,
          maxZoom: Infinity,
          minZoom: 0,
        },
      },
      options
    );

    this._debugHelpers = {
      axis: options.debug.axis
        ? new THREE.AxesHelper(options.debug.axisSize)
        : null,
      stats: options.debug.stats ? Stats() : null,
    };

    if (options.debug) {
      if (options.debug.axis) {
        this._scene.add(this._debugHelpers.axis);
      }

      if (options.debug.stats) {
        document.body.appendChild(this._debugHelpers.stats.domElement);
      }
    }

    if (options.orbitalControls.enable) {
      // 💩 code
      new OrbitControls(this._camera, this._renderer._renderer.domElement);
    }
  }

  /**
   *
   * @param {import("./Sphere").Sphere[]} spheres
   */
  add(...spheres) {
    spheres.forEach((sphere) => {
      this._spheres.push(sphere);
      this._scene.add(sphere.mesh);
    });
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  positionCamera(x, y, z) {
    this._camera.position.set(x, y, z);
  }

  /**
   *
   * @param {number} color hexadecial number, i.e: 0xffffff -> white
   * @param {number} intensity number between 0 and 1.
   */
  setAmbientLight(color, intensity) {
    let ambientLight = new THREE.AmbientLight(color, intensity);
    this._scene.add(ambientLight);
  }

  /**
   * @param {number} color hexadecial number, i.e: 0xffffff -> white
   * @param {number} intensity number between 0 and 1.
   * @param {object} [position] the position of the point light.
   * @param {number} [position.x]
   * @param {number} [position.y]
   * @param {number} [position.z]
   */
  setPointLight(color, intensity, position = { x: 0, y: 0, z: 0 }) {
    let pointLight = new THREE.PointLight(color, intensity);
    pointLight.position.set(position.x, position.y, position.z);
    this._scene.add(pointLight);
  }

  /**
   * Starts animation sequence.
   */
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    for (let sphere of this._spheres) {
      sphere.animateNextFrame();
    }
    this._renderer._render(this._scene, this._camera);

    if (this._debugHelpers.stats) this._debugHelpers.stats.update();
  }
}
