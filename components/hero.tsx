"use client";

import { BOOKING } from "@/lib/messages";
import { useI18n } from "@/lib/i18n";
import { Film } from "@/components/film";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="relative z-10 bg-background">
        <div className="mx-auto flex max-w-page flex-col items-center px-6 pb-10 pt-8 text-center md:pb-14 md:pt-12">
        <h1 className="rise rise-0 display max-w-7xl text-[clamp(3.4rem,8.6vw,7.4rem)]">
          <span className="block">
            {t.hero.welcome} <em className="emph">{t.hero.to}</em>
          </span>
          <span className="block">
            {t.hero.your} {t.hero.space}
          </span>
        </h1>
        <div className="rise rise-1 mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
          <p>{t.hero.p1}</p>
          <p>{t.hero.p2}</p>
        </div>
        <div className="rise rise-2 mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="pill">
            {t.nav.book}
          </a>
          <a href="#difference" className="link-quiet">
            {t.hero.read}
          </a>
        </div>
        </div>
      </div>

      <div className="rise rise-3 pointer-events-none absolute inset-x-0 bottom-0 top-[clamp(220px,34vh,300px)] z-0">
        <Film
          src="/media/video/clinic-film-720.mp4"
          srcLarge="/media/video/clinic-film-1080.mp4"
          poster="/media/video/clinic-film-poster.jpg"
          label={t.filmLabel}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    </section>
  );
}
