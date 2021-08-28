import { kVenusProps } from "../../utils/constants";
import { Planet } from "./Planet";

export const Venus = ({ viewWidth, viewHeight }) => {
  const sceneOptions = {
    orbitalControls: {
      enable: true,
      maxDistance: 10,
      minDistance: 2,
    },
  };

  const sphereOptions = {
    mapURL: kVenusProps.surfaceTexture,
  };

  const animation = (mesh) => {
    mesh.rotation.y += kVenusProps.rotation;
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
