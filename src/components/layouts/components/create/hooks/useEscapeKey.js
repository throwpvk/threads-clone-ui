import { useEffect } from "react";

export const useEscapeKey = (enabled, onEscape) => {
  useEffect(() => {
    if (!enabled) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onEscape();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [enabled, onEscape]);
};
