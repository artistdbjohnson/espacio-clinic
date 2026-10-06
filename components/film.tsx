"use client";

import { useEffect, useRef } from "react";

type FilmProps = {
  src: string;
  srcLarge?: string;
  poster: string;
  label: string;
  className?: string;
};

export function Film({ src, srcLarge, poster, label, className = "" }: FilmProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      video.removeAttribute("autoplay");
      video.style.opacity = "1";
      return;
    }

    let frame = 0;
    let endedTimer = 0;
    const tick = () => {
      if (video.paused || video.ended) return;
      const duration = video.duration;
      if (duration && Number.isFinite(duration)) {
        const fade = 0.5;
        const time = video.currentTime;
        let opacity = 1;
        if (time < fade) opacity = time / fade;
        else if (duration - time < fade) opacity = Math.max(0, (duration - time) / fade);
        video.style.opacity = String(opacity);
      }
      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(tick);
    };

    const onEnded = () => {
      video.style.opacity = "0";
      window.clearTimeout(endedTimer);
      endedTimer = window.setTimeout(() => {
        video.currentTime = 0;
        video.play().then(start).catch(() => undefined);
      }, 100);
    };

    const onPlay = () => start();
    video.addEventListener("ended", onEnded);
    video.addEventListener("play", onPlay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          video.play().then(start).catch(() => undefined);
        } else {
          video.pause();
          window.cancelAnimationFrame(frame);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(video);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(endedTimer);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("play", onPlay);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      className={`h-full w-full object-cover ${className}`}
      poster={poster}
      muted
      playsInline
      autoPlay
      preload="auto"
      aria-label={label}
    >
      {srcLarge ? <source src={srcLarge} media="(min-width: 768px)" type="video/mp4" /> : null}
      <source src={src} type="video/mp4" />
    </video>
  );
}
