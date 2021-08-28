/**
 * Base component for all planet components.
 */
import { Renderer, Scene, Sphere } from "../../utils/3D";
import { useRef, useEffect } from "react";
import { AnimationCallback, SphereOptions } from "../../utils/3D/Sphere";
import { SceneOptions } from "../../utils/3D/Scene";
import { nanoid } from "nanoid";

/**
 * @typedef PlanetProps
 * @type {object}
 * @property {number} viewWidth
 * @property {number} viewHeight
 * @property {AnimationCallback} animation
 * @property {SceneOptions} sceneOptions
 * @property {SphereOptions} sphereOptions
 * @property {string} id
 * @property {Sphere[]} layers
 */

/**
 *
 * @param {PlanetProps} props
 */

export const Planet = ({
  viewWidth,
  viewHeight,
  animation,
  sceneOptions,
  sphereOptions,
  id,
  layers,
}) => {
  // todo: add tilt option, as in the earth is tilted`
  // todo: add rotate around the planet's axis instead of the world axis

  const rendererRef = useRef(
    new Renderer(viewWidth, viewHeight, { antialias: false })
  );
  const sceneRef = useRef(new Scene(rendererRef.current, sceneOptions));
  const sphereRef = useRef(new Sphere(sphereOptions));

  const canvasRef = useRef(null);

  useEffect(() => {
    sphereRef.current.setAnimation(animation);

    sceneRef.current.add(sphereRef.current);

    if (layers && layers.length) {
      for (let layer of layers) {
        sceneRef.current.add(layer);
      }
    }

    sceneRef.current.positionCamera(0, 0, 3);

    sceneRef.current.setAmbientLight(0xffffff, 0.2);
    sceneRef.current.setPointLight(0xffffff, 1, { x: 5, y: 3, z: 5 });

    rendererRef.current.attachTo(canvasRef.current);

    sceneRef.current.animate();
  }, []);

  return <div ref={canvasRef} id={id ?? nanoid()}></div>;
};
