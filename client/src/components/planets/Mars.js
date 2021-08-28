import { kMarsProps } from "../../utils/constants";
import { Planet } from "./Planet";

export const Mars = ({ viewWidth, viewHeight }) => {
  const sceneOptions = {
    orbitalControls: {
      enable: true,
      maxDistance: 10,
      minDistance: 2,
    },
  };

  const sphereOptions = {
    mapURL: kMarsProps.surfaceTexture,
    bumpMapURL: kMarsProps.bumpMapTexture,
    bumpScale: 0.3,
    shinySurface: true,
  };

  const animation = (mesh) => {
    mesh.rotation.y += kMarsProps.rotation;
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
