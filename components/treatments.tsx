"use client";

import { useMemo, useState } from "react";
import treatmentsData from "@/content/treatments.json";
import ptTreatments from "@/content/treatments-pt.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChapterHead } from "@/components/arrive";
import { Plate } from "@/components/plate";
import { useI18n } from "@/lib/i18n";
import { BOOKING, chipLabels, groups, type Lang } from "@/lib/messages";

type TextBlock = {
  name: string;
  target: string;
  description: string;
  pricing: string[];
  faq: { q: string; a: string }[];
  prose: string[];
};

const ptMap = ptTreatments as Record<string, TextBlock>;

function blockFor(slug: string, en: TextBlock, lang: Lang): TextBlock {
  if (lang === "pt" && ptMap[slug]) return ptMap[slug];
  return en;
}

export function Treatments() {
  const { t, lang } = useI18n();
  const [group, setGroup] = useState("all");
  const [chip, setChip] = useState<string | null>(null);

  const chips = useMemo(() => {
    if (group === "all") return [];
    return Object.entries(chipLabels).filter(([id, meta]) => {
      if (!meta.groups.includes(group)) return false;
      return treatmentsData.some((item) => item.groups.includes(group) && item.chips.includes(id));
    });
  }, [group]);

  const visible = treatmentsData.filter((item) => {
    if (group !== "all" && !item.groups.includes(group)) return false;
    if (chip && !item.chips.includes(chip)) return false;
    return true;
  });

  return (
    <section id="treatments" className="chapter mt-28 md:mt-40 lg:mt-48">
      <div className="mx-auto max-w-page px-5 md:px-10 lg:px-16">
        <ChapterHead>
          <p className="kicker">{t.treatments.kicker}</p>
          <h2 className="display mt-4 text-[clamp(2.7rem,5vw,4.8rem)]">
            {t.treatments.titleA} <em className="emph">{t.treatments.titleEm}</em>
          </h2>
        </ChapterHead>
        <div className="mt-5 max-w-2xl space-y-3 text-[0.98rem] leading-snug md:mt-6 md:space-y-4 md:text-[1.02rem] md:leading-relaxed">
          <p>{t.treatments.p1}</p>
          <p>{t.treatments.p2}</p>
        </div>

        <Tabs
          value={group}
          onValueChange={(value) => {
            setGroup(value);
            setChip(null);
          }}
          className="mt-7 md:mt-12"
        >
          <TabsList aria-label={t.treatments.filter}>
            {groups.map((item) => (
              <TabsTrigger key={item.id} value={item.id}>
                {lang === "pt" ? item.pt : item.en}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {chips.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2" aria-label={t.treatments.filter}>
            {chips.map(([id, meta]) => {
              const active = chip === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setChip(active ? null : id)}
                  className={`rounded-full border px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.14em] ${active ? "border-[#555A41] bg-[#555A41] text-[#F7F3EE]" : "border-[var(--line)] text-kicker"}`}
                >
                  {lang === "pt" ? meta.pt : meta.en}
                </button>
              );
            })}
            {chip ? (
              <button type="button" onClick={() => setChip(null)} className="px-2 text-[0.68rem] uppercase tracking-[0.14em] text-kicker">
                {t.treatments.clear}
              </button>
            ) : null}
          </div>
        ) : null}

        <div className="mt-8 border-t hairline">
          {visible.length === 0 ? <p className="py-10 text-kicker">{t.treatments.empty}</p> : null}
          {visible.map((item) => {
            const copy = blockFor(item.slug, item.en, lang);
            return (
              <article key={item.slug} className="grid grid-cols-[7.25rem_1fr] items-start gap-4 border-b hairline py-6 md:grid-cols-12 md:gap-10 md:py-12">
                <Plate
                  src={`/media/plates/${item.image}`}
                  alt={copy.name}
                  sizes="(min-width: 768px) 280px, 30vw"
                  position={item.pos}
                  className="aspect-[3/4] md:col-span-4 md:aspect-[4/5] lg:col-span-3"
                />
                <div className="md:col-span-8 lg:col-span-9">
                  <h3 className="font-display text-3xl text-heading md:text-4xl">{copy.name}</h3>
                  <p className="mt-3 font-display text-2xl italic text-heading">
                    {t.treatments.from} {item.listed}
                  </p>
                  {copy.target ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-kicker">{copy.target}</p> : null}
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="pill pill-sm">
                      {t.treatments.book}
                    </a>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-quiet">
                      {t.treatments.site}
                    </a>
                  </div>
                  <Accordion type="single" collapsible className="mt-6">
                    <AccordionItem value="details">
                      <AccordionTrigger>{t.treatments.details}</AccordionTrigger>
                      <AccordionContent>
                        {copy.description ? <p className="max-w-3xl whitespace-pre-line leading-relaxed">{copy.description}</p> : null}
                        {copy.pricing.length > 0 ? (
                          <div className="mt-6 max-w-3xl space-y-1.5 border-t hairline pt-5 text-[0.98rem] leading-relaxed">
                            {copy.pricing.map((line, index) => (
                              <p key={`${item.slug}-p-${index}`}>{line}</p>
                            ))}
                          </div>
                        ) : null}
                        {copy.prose.length > 0 ? (
                          <div className="mt-6 max-w-3xl space-y-3 leading-relaxed">
                            {copy.prose.map((line) => (
                              <p key={line}>{line}</p>
                            ))}
                          </div>
                        ) : null}
                        {copy.faq.length > 0 ? (
                          <Accordion type="multiple" className="mt-6 max-w-3xl">
                            {copy.faq.map((entry, index) => (
                              <AccordionItem key={`${item.slug}-q-${index}`} value={`${item.slug}-${index}`}>
                                <AccordionTrigger>{entry.q}</AccordionTrigger>
                                <AccordionContent>
                                  <p className="whitespace-pre-line leading-relaxed">{entry.a}</p>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        ) : null}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
