import * as THREE from "three";

/**
 * @typedef SphereOptions
 * @type {object}
 * @property {string} mapURL
 * @property {string} [bumpMapURL]
 * @property {number} [bumpScale]
 * @property {number} [radius]
 * @property {number} [segmentsWidth]
 * @property {number} [segmentsHeight]
 * @property {boolean} [shinySurface]
 * @property {number} [emissiveColorHex]
 * @property {number} [emissiveIntensity]
 * @property {string} [emissiveMapURL]
 * @property {boolean} [transparent]
 */

/**
 * @typedef AnimationCallback
 * @type {(mesh: THREE.Mesh) => void}
 */

export class Sphere {
  /**
   * Creates a new Sphere.
   * @param {SphereOptions} sphereOptions
   */
  constructor(sphereOptions) {
    let materialOptions = {
      map: new THREE.TextureLoader().load(sphereOptions.mapURL),
    };

    if (typeof sphereOptions.bumpMapURL === "string") {
      materialOptions.bumpMap = new THREE.TextureLoader().load(
        sphereOptions.bumpMapURL
      );
    }

    if (typeof sphereOptions.bumpScale === "number") {
      materialOptions.bumpScale = sphereOptions.bumpScale;
    }

    if (typeof sphereOptions.emissiveColorHex === "number") {
      materialOptions.emissive = new THREE.Color(
        sphereOptions.emissiveColorHex
      );
    }

    if (typeof sphereOptions.emissiveIntensity === "number") {
      materialOptions.emissiveIntensity = sphereOptions.emissiveIntensity;
    }

    if (typeof sphereOptions.emissiveMapURL === "string") {
      materialOptions.emissiveMap = new THREE.TextureLoader().load(
        sphereOptions.emissiveMapURL
      );
    }

    if (typeof sphereOptions.transparent === "boolean") {
      materialOptions.transparent = sphereOptions.transparent;
    }

    this.mesh = new THREE.Mesh(
      new THREE.SphereBufferGeometry(
        sphereOptions.radius,
        sphereOptions.segmentsWidth ?? 32,
        sphereOptions.segmentsHeight ?? 32
      ),
      sphereOptions.shinySurface
        ? new THREE.MeshPhongMaterial(materialOptions)
        : new THREE.MeshLambertMaterial(materialOptions)
    );
  }

  /**
   * @param {AnimationCallback} animationCallback
   */
  setAnimation(animationCallback) {
    this._animationCallback = animationCallback;
  }

  animateNextFrame() {
    if (!this._animationCallback) return;

    this._animationCallback(this.mesh);
  }
}
