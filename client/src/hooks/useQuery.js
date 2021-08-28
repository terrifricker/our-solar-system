import { useLocation } from "react-router-dom";

export function useQuery() {
  return new window.URLSearchParams(useLocation().search);
}
