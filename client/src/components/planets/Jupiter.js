import { kJupiterProps } from "../../utils/constants";
import { Planet } from "./Planet";

export const Jupiter = ({ viewWidth, viewHeight }) => {
  const sceneOptions = {
    orbitalControls: {
      enable: true,
      maxDistance: 10,
      minDistance: 2,
    },
  };

  const sphereOptions = {
    mapURL: kJupiterProps.surfaceTexture,
  };

  const animation = (mesh) => {
    mesh.rotation.y += kJupiterProps.rotation;
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
