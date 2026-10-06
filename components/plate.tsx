"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type PlateProps = {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  position?: string;
  priority?: boolean;
};

export function Plate({ src, alt, className = "", sizes, position = "center 20%", priority = false }: PlateProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-in");
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`plate relative overflow-hidden bg-mist/40 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="plate-img object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
