"use client";

import quotesEn from "@/content/quotes-en.json";
import quotesPt from "@/content/quotes-pt.json";
import { ChapterHead } from "@/components/arrive";
import { Plate } from "@/components/plate";
import { useI18n } from "@/lib/i18n";

export function Testimonials() {
  const { t, lang } = useI18n();
  const quotes = lang === "pt" ? quotesPt : quotesEn;
  const penny = quotes.find((quote) => quote.name === "Penny") ?? quotes[0];
  const rest = quotes.filter((quote) => quote !== penny);

  return (
    <section id="testimonials" className="chapter mt-28 md:mt-40 lg:mt-48">
      <div className="mx-auto max-w-page px-5 md:px-10 lg:px-16">
        <ChapterHead>
          <p className="kicker">{t.testimonials.kicker}</p>
          <h2 className="display mt-4 max-w-3xl text-[clamp(2.7rem,5vw,4.8rem)]">{t.testimonials.title}</h2>
        </ChapterHead>
        <div className="mt-10 grid items-end gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-14">
          <blockquote className="lg:col-span-7">
            <p className="font-display text-[clamp(1.7rem,3vw,2.7rem)] italic leading-[1.2] text-heading">{penny.quote}</p>
            <footer className="mt-8 text-sm tracking-[0.14em] text-kicker">
              {penny.name}
              <span className="mx-3 text-peach">·</span>
              {penny.date}
            </footer>
          </blockquote>
          <Plate
            src="/media/plates/interior-chair-detail.jpg"
            alt={t.testimonials.chairAlt}
            sizes="(min-width: 1024px) 34vw, 100vw"
            position="center 35%"
            className="aspect-[4/5] lg:col-span-5"
          />
        </div>
        <div className="masonry mt-16 border-t hairline pt-12 lg:mt-24">
          {rest.map((quote) => (
            <article key={`${quote.name}-${quote.date}`}>
              <p className="text-[1.02rem] leading-relaxed">{quote.quote}</p>
              <p className="mt-4 text-[0.72rem] uppercase tracking-[0.16em] text-kicker">
                {quote.name}
                <span className="mx-2 text-peach">·</span>
                {quote.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
