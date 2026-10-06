"use client";

import { ChapterHead } from "@/components/arrive";
import { Plate } from "@/components/plate";
import { useI18n } from "@/lib/i18n";

export function Core() {
  const { t } = useI18n();

  return (
    <section id="core" className="chapter mt-28 md:mt-40 lg:mt-48">
      <div className="mx-auto max-w-page px-5 md:px-10 lg:px-16">
        <ChapterHead>
          <p className="kicker">{t.core.kicker}</p>
          <h2 className="display mt-4 text-[clamp(2.7rem,5vw,4.8rem)]">
            {t.core.titleA} <em className="emph">{t.core.titleB}</em>
          </h2>
        </ChapterHead>
        <div className="mt-8 grid items-start gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 space-y-4 text-[1.05rem] leading-relaxed lg:order-1 lg:col-span-5">
            {t.core.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <article className="order-1 border-t hairline pt-6 lg:order-2 lg:col-span-7">
            <Plate
              src="/media/plates/interior-chair-detail.jpg"
              alt={t.core.chairAlt}
              sizes="100vw"
              position="center 30%"
              className="mb-6 aspect-[16/9] lg:hidden"
            />
            <p className="kicker">01</p>
            <h3 className="mt-3 font-display text-3xl text-heading md:text-4xl">{t.core.differenceTitle}</h3>
            <div className="mt-5 space-y-4 leading-relaxed">
              {t.core.difference.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-16 grid items-stretch gap-10 lg:mt-24 lg:grid-cols-2 lg:gap-16">
          <Plate
            src="/media/plates/interior-chair-detail.jpg"
            alt={t.core.chairAlt}
            sizes="(min-width: 1024px) 46vw, 100vw"
            position="center 30%"
            className="hidden aspect-[4/5] lg:block"
          />
          <div className="flex flex-col justify-end gap-14">
            <article>
              <p className="kicker">02</p>
              <h3 className="mt-3 font-display text-3xl text-heading md:text-4xl">{t.core.whyTitle}</h3>
              <p className="mt-5 max-w-xl leading-relaxed">{t.core.why}</p>
            </article>
            <article>
              <p className="kicker">03</p>
              <h3 className="mt-3 font-display text-3xl text-heading md:text-4xl">{t.core.ethosTitle}</h3>
              <p className="mt-5 max-w-xl leading-relaxed">{t.core.ethos}</p>
            </article>
          </div>
        </div>

        <Plate
          src="/media/plates/interior-botanical.jpg"
          alt={t.core.botanicalAlt}
          sizes="100vw"
          position="center 40%"
          className="mt-16 aspect-[4/5] md:aspect-[16/8] lg:mt-24"
        />
      </div>
    </section>
  );
}
