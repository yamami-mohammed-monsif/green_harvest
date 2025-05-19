"use client";

import { motion, MotionProvider } from "../utils/MotionProvider";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number; // Optional delay for staggered animations
  threshold?: number; // Optional threshold for intersection observer
}

const Reveal = ({ children, delay = 0, threshold = 0.1 }: Props) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once it's been seen, we can unobserve
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <MotionProvider>
      <div ref={ref} className="w-full border">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1.0],
            delay: delay,
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </MotionProvider>
  );
};

export default Reveal;
