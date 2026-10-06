"use client";

import { Film } from "@/components/film";
import { Plate } from "@/components/plate";
import { useI18n } from "@/lib/i18n";

export function Process() {
  const { t } = useI18n();

  return (
    <section id="process" className="chapter mt-28 md:mt-40 lg:mt-48">
      <div className="mx-auto max-w-page px-5 md:px-10 lg:px-16">
        <p className="kicker">{t.process.kicker}</p>
        <h2 className="display mt-4 text-[clamp(2.7rem,5vw,4.8rem)]">{t.process.title}</h2>
        <div className="mt-8 grid items-start gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-5 lg:sticky lg:top-[calc(var(--nav-h)+env(safe-area-inset-top)+1.75rem)]">
            <h3 className="font-display text-[1.65rem] leading-[1.15] text-heading md:text-[clamp(2rem,3.4vw,3.3rem)] md:leading-[1.05]">
              {t.process.headline}
            </h3>
            <div className="mt-4 space-y-3 text-[0.98rem] leading-snug text-foreground/90 md:mt-6 md:space-y-4 md:text-[1.02rem] md:leading-relaxed">
              <p>{t.process.p1}</p>
              <p>{t.process.p2}</p>
              <p>{t.process.p3}</p>
            </div>
          </div>
          <div className="order-1 space-y-16 lg:order-2 lg:col-span-7 lg:space-y-28">
            <article className="grid items-start gap-6 lg:grid-cols-1">
              <Plate
                src="/media/plates/consult-doctors-seated.jpg"
                alt={t.process.consultAlt}
                sizes="(min-width: 1024px) 46vw, 100vw"
                position="center 30%"
                className="aspect-[16/9] lg:aspect-[5/4]"
              />
              <div>
                <p className="kicker">01</p>
                <h3 className="mt-3 font-display text-3xl text-heading md:text-4xl">{t.process.prepare}</h3>
                <p className="mt-4 max-w-xl leading-relaxed">{t.process.prepareBody}</p>
              </div>
            </article>
            <article className="grid grid-cols-[6.5rem_1fr] items-start gap-4 sm:grid-cols-1 sm:gap-6">
              <div className="relative aspect-[4/5] overflow-hidden bg-field sm:aspect-[5/4]">
                <Film
                  src="/media/video/treatment-film-720.mp4"
                  poster="/media/video/treatment-film-poster.jpg"
                  label={t.process.treatFilm}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
              </div>
              <div>
                <p className="kicker">02</p>
                <h3 className="mt-3 font-display text-3xl text-heading md:text-4xl">{t.process.treat}</h3>
                <p className="mt-4 max-w-xl leading-relaxed">{t.process.treatBody}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
