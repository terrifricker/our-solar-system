import { useContext } from "react";
import { WebGLContext } from "../contexts/WebGLContext";

export const useWebGL = () => {
  return useContext(WebGLContext);
};
