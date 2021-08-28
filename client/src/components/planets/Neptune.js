import { kNeptuneProps } from "../../utils/constants";
import { Planet } from "./Planet";

export const Neptune = ({ viewWidth, viewHeight }) => {
  const sceneOptions = {
    orbitalControls: {
      enable: true,
      maxDistance: 10,
      minDistance: 2,
    },
  };

  const sphereOptions = {
    mapURL: kNeptuneProps.surfaceTexture,
  };

  const animation = (mesh) => {
    mesh.rotation.y += kNeptuneProps.rotation;
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
