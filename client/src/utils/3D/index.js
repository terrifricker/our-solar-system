import { Renderer } from "./Renderer";
import { Scene } from "./Scene";
import { Sphere } from "./Sphere";
import { WEBGL } from "three/examples/jsm/WebGL";

function isWebGLAvailable() {
  return WEBGL.isWebGLAvailable();
}

export { Sphere, Scene, Renderer, isWebGLAvailable };
