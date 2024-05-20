import { useRef } from "react";

export const useScrollTo = () => {
  const ref = useRef(null) as any;

  const scrollTo = (position: any) => {
    if (ref.current && position) {
      window.scrollTo({
        top: ref?.current?.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return {
    ref,
    scrollTo,
  };
};
