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
   * @param {Function} animationCallback
   */
  setAnimation(animationCallback) {
    this._animationCallback = animationCallback;
  }

  animateNextFrame() {
    if (!this._animationCallback) return;

    this._animationCallback();
  }
}
