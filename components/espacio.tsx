"use client";

import { Plate } from "@/components/plate";
import { useI18n } from "@/lib/i18n";

export function Espacio() {
  const { t } = useI18n();

  return (
    <section id="espacio" className="chapter mt-28 md:mt-40 lg:mt-48">
      <div className="mx-auto grid max-w-page items-center gap-10 px-5 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
        <div className="lg:col-span-6">
          <p className="kicker">{t.espacio.kicker}</p>
          <h2 className="display mt-4 text-[clamp(3.4rem,7vw,6.5rem)]">{t.espacio.word}</h2>
          <p className="kicker mt-6">
            {t.espacio.spanish}
            <span className="mx-3 text-peach">·</span>
            {t.espacio.english}
          </p>
          <article>
            <p className="mt-6 font-display text-2xl italic leading-snug text-heading md:text-3xl">{t.espacio.noun}</p>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed">{t.espacio.body}</p>
          </article>
        </div>
        <Plate
          src="/media/plates/interior-consult-room.jpg"
          alt={t.espacio.alt}
          sizes="(min-width: 1024px) 46vw, 100vw"
          position="center"
          className="aspect-[4/3] lg:col-span-6"
        />
      </div>
    </section>
  );
}
