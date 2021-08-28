import { kEarthProps } from "../../utils/constants";
import { Sphere } from "../../utils/3D";
import { Planet } from "./Planet";

export const Earth = ({ viewWidth, viewHeight }) => {
  const sceneOptions = {
    orbitalControls: {
      enable: true,
      maxDistance: 10,
      minDistance: 2,
    },
  };

  const sphereOptions = {
    mapURL: kEarthProps.surfaceTexture,
    bumpMapURL: kEarthProps.bumpMapTexture,
    bumpScale: 0.3,
    shinySurface: true,
  };

  const cloudsLayer = new Sphere({
    mapURL: kEarthProps.cloudsTexture,
    radius: 1 + 0.05,
    transparent: true,
  });

  cloudsLayer.setAnimation(
    (mesh) => (mesh.rotation.y += kEarthProps.rotation * 0.7)
  );

  const animation = (mesh) => {
    mesh.rotation.y += kEarthProps.rotation;
  };
  return (
    <Planet
      viewWidth={viewWidth}
      viewHeight={viewHeight}
      sceneOptions={sceneOptions}
      sphereOptions={sphereOptions}
      layers={[cloudsLayer]}
      animation={animation}
    />
  );
};
