import * as THREE from "three";

export class Renderer {
  /**
   * Creates a new renderer for 3D objects.
   * @param {number} viewWidth
   * @param {number} viewHeight
   * @param {THREE.WebGLRendererParameters} [rendererOptions]
   */
  constructor(viewWidth, viewHeight, rendererOptions = {}) {
    this._renderer = new THREE.WebGLRenderer(rendererOptions);
    this._renderer.setSize(viewWidth, viewHeight);
    this._renderer.setPixelRatio(viewWidth / viewHeight);
    this.pixelRatio = viewWidth / viewHeight;
    this.aspectRatio = viewWidth / viewHeight;
  }

  /**
   * Resizes the canvas.
   * @param {number} width
   * @param {number} height
   */
  resize(width, height) {
    this._renderer.setSize(width, height);
  }

  /**
   * Attaches the canvas to an element in the DOM.
   * @param {HTMLElement} element
   */
  attachTo(element) {
    element.appendChild(this._renderer.domElement);
  }

  /**
   * This method is used internally by the Scene class.
   * @param {THREE.Object3D} scene
   * @param {THREE.Camera} camera
   */
  _render(scene, camera) {
    this._renderer.render(scene, camera);
  }
}
