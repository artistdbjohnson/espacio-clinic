"use client";

import { ChapterHead, useSettle } from "@/components/arrive";
import { Plate } from "@/components/plate";
import { useI18n } from "@/lib/i18n";

export function Difference() {
  const { t } = useI18n();
  const ledgerRef = useSettle<HTMLOListElement>(0.12);

  return (
    <section id="difference" className="chapter mt-28 md:mt-40 lg:mt-48">
      <div className="mx-auto grid max-w-page items-start gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
        <div className="lg:col-span-6">
          <ChapterHead>
            <p className="kicker">{t.difference.kicker}</p>
            <h2 className="display mt-4 text-[clamp(2.7rem,5vw,4.8rem)]">{t.difference.title}</h2>
          </ChapterHead>
          <ol ref={ledgerRef} className="ledger mt-10 md:mt-14">
            {t.difference.lines.map((line, index) => (
              <li key={line} className="ledger-line border-t hairline py-6 md:py-7">
                <div className="grid grid-cols-[2.5rem_1fr] gap-4 md:grid-cols-[3.5rem_1fr]">
                  <span className="font-display text-lg italic text-heading">0{index + 1}</span>
                  <p className="font-display text-[1.35rem] leading-snug text-foreground md:text-[1.65rem]">{line}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <Plate
          src="/media/plates/dr-liliana-and-colleague.jpg"
          alt={t.difference.alt}
          sizes="(min-width: 1024px) 42vw, 100vw"
          position="center 18%"
          className="aspect-[3/4] lg:col-span-6 lg:aspect-[4/5] lg:sticky lg:top-[calc(var(--nav-h)+env(safe-area-inset-top)+1.5rem)]"
        />
      </div>
    </section>
  );
}
