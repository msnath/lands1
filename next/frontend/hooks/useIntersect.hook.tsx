import React from "react";
import { useIntersection } from "react-use";

const useIntersect = (
  ref: React.RefObject<any>,
  config: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  }
) => {
  const observer = useIntersection(ref, config);
  return !!observer?.isIntersecting;
};

export default useIntersect;
