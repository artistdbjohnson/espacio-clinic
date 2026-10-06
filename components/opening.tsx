"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

export function Opening() {
  const { t } = useI18n();
  const wordRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("is-opening")) return;

    let killed = false;
    const finish = () => {
      if (killed) return;
      killed = true;
      try {
        sessionStorage.setItem("espacio-open", "1");
      } catch {
        /* ignore */
      }
      root.classList.remove("is-opening");
      root.classList.add("is-revealed");
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", finish);

    const fly = window.setTimeout(() => {
      if (killed) return;
      const word = wordRef.current;
      const target = document.getElementById("nav-mark");
      if (!word || !target) return;
      const first = word.getBoundingClientRect();
      const last = target.getBoundingClientRect();
      const dx = last.left + last.width / 2 - (first.left + first.width / 2);
      const dy = last.top + last.height / 2 - (first.top + first.height / 2);
      const scale = Math.min(0.46, Math.max(0.16, last.height / first.height));
      word.style.position = "fixed";
      word.style.left = `${first.left}px`;
      word.style.top = `${first.top}px`;
      word.style.margin = "0";
      word.style.transformOrigin = "center center";
      window.requestAnimationFrame(() => {
        word.style.transition = "transform 0.85s cubic-bezier(.22,1,.36,1)";
        word.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
      });
    }, 1100);

    const reveal = window.setTimeout(() => {
      if (killed) return;
      bgRef.current?.classList.add("is-clear");
      wordRef.current?.classList.add("is-gone");
      document.getElementById("nav-mark")?.classList.add("is-shown");
    }, 1980);

    const end = window.setTimeout(finish, 2400);

    return () => {
      killed = true;
      window.clearTimeout(fly);
      window.clearTimeout(reveal);
      window.clearTimeout(end);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", finish);
    };
  }, []);

  return (
    <div className="opening" aria-hidden="true">
      <div ref={bgRef} className="opening-bg" />
      <div className="opening-stage">
        <p ref={wordRef} className="opening-word">
          espacio
        </p>
        <div className="opening-def">
          <p className="kicker">
            {t.opening.spanish}
            <span className="mx-3 text-peach">·</span>
            {t.opening.english}
          </p>
          <p className="mx-auto mt-4 max-w-xl font-display text-xl italic text-foreground/80 md:text-2xl">
            {t.opening.noun}
          </p>
        </div>
      </div>
    </div>
  );
}
