import { useEffect } from "react";

export const useScrollLock = (isActive) => {
  useEffect(() => {
    if (!isActive) return;

    const scrollY = window.scrollY;
    document.body.classList.add("modal-lock-scroll");
    document.body.style.top = `-${scrollY}px`;

    return () => {
      document.body.classList.remove("modal-lock-scroll");
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    };
  }, [isActive]);
};
