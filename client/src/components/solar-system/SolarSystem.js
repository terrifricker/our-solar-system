import { useEffect, useState } from "react";
import { useWebGL } from "../../hooks/useWebGL";
import { SolarSystem2D } from "./SolarSystem2D";
import { SolarSystem3D } from "./SolarSystem3D";

export const SolarSystem = () => {
  const [solarSystemUI, setSolarSystemUI] = useState(null);
  const isWebGLAvailable = useWebGL();

  useEffect(() => {
    if (isWebGLAvailable) {
      setSolarSystemUI(<SolarSystem3D />);
    } else {
      setSolarSystemUI(<SolarSystem2D />);
    }
  }, [isWebGLAvailable]);

  return <>{solarSystemUI}</>;
};
