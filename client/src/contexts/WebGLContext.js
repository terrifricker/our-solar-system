import { createContext, useRef } from "react";
import { WEBGL } from "three/examples/jsm/WebGL";

export const WebGLContext = createContext(false);

export const WebGLProvider = ({ children }) => {
  const isWebGLAvailableRef = useRef(WEBGL.isWebGLAvailable());
  return (
    <WebGLContext.Provider value={isWebGLAvailableRef.current}>
      {children}
    </WebGLContext.Provider>
  );
};
