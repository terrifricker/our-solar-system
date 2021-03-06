import {
  kMercuryBumpMapTexture,
  kMercuryRotationSpeed,
  kMercurySurfaceTexture,
} from "../../utils/constants";
import { Planet } from "./Planet";

export const Mercury = ({ viewWidth, viewHeight }) => {
  const sceneOptions = {
    orbitalControls: {
      enable: true,
      maxDistance: 10,
      minDistance: 2,
    },
  };

  const sphereOptions = {
    mapURL: kMercurySurfaceTexture,
    bumpMapURL: kMercuryBumpMapTexture,
    bumpScale: 0.3,
    shinySurface: true,
  };

  const animation = (mesh) => {
    mesh.rotation.y += kMercuryRotationSpeed;
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
