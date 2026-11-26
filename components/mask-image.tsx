"use client";
import { useEffect, useState } from "react";

import { useReducedMotion } from "motion/react";

/**
 * A film-still mask: the image is revealed as a horizontal strip slides
 * across it. Reduced motion: the image is shown immediately.
 */
export function MaskImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        setShown(true);
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transition: reduced ? "none" : "opacity 800ms ease",
      }}
    >
      <div className="mask-image" style={visible ? { opacity: 1 } : { opacity: 0 }}>
        <img
          src={src}
          alt={alt}
          
          
          className="object-cover"
          loading="lazy"
         />
      </div>
    </div>
  );
}
