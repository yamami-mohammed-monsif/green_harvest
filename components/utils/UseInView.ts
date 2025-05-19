import { useEffect, useState } from "react";

export const useInView = (offset = 200) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { rootMargin: `${offset}px` }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, offset]);

  return { ref: setRef, isVisible };
};
