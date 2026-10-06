"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";

function watch<T extends HTMLElement>(node: T, threshold: number) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    node.classList.add("is-in");
    return () => undefined;
  }
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return;
      node.classList.add("is-in");
      observer.disconnect();
    },
    { threshold, rootMargin: "0px 0px -32px 0px" },
  );
  observer.observe(node);
  return () => observer.disconnect();
}

export function useSettle<T extends HTMLElement>(threshold = 0) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    return watch(node, threshold);
  }, [threshold]);
  return ref as RefObject<T>;
}

export function ChapterHead({ children }: { children: ReactNode }) {
  const ref = useSettle<HTMLDivElement>(0);
  return (
    <div ref={ref} className="chapter-head">
      {children}
    </div>
  );
}
