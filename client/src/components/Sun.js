import { Planet } from "./planets/Planet";
import { kSunProps } from "../utils/constants";

export const Sun = ({ viewWidth, viewHeight }) => {
  const sceneOptions = {
    orbitalControls: {
      enable: true,
      maxDistance: 10,
      minDistance: 2,
    },
  };

  const sphereOptions = {
    mapURL: kSunProps.surfaceTexture,
    shinySurface: true,
  };

  const animation = (mesh) => {
    mesh.rotation.y += kSunProps.rotation;
  };

  return (
    <Planet
      viewWidth={viewWidth}
      viewHeight={viewHeight}
      sceneOptions={sceneOptions}
      sphereOptions={sphereOptions}
      animation={animation}
    />
  );
};
