"use client";

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChapterHead } from "@/components/arrive";
import { Plate } from "@/components/plate";
import { biography, team } from "@/lib/team";
import { useI18n } from "@/lib/i18n";

export function Team() {
  const { t, lang } = useI18n();
  const [lead, ...rest] = team;
  const leadBio = biography(lead.id, lang);

  return (
    <section id="team" className="chapter mt-28 md:mt-40 lg:mt-48">
      <div className="mx-auto max-w-page px-5 md:px-10 lg:px-16">
        <ChapterHead>
          <p className="kicker">{t.team.kicker}</p>
          <h2 className="display mt-4 max-w-4xl text-[clamp(2.7rem,5.4vw,5rem)]">
            {t.team.meet} <em className="emph">{t.team.our}</em> {t.team.team}
            <span className="block">
              {t.team.of} <em className="emph">{t.team.experts}</em>
            </span>
          </h2>
        </ChapterHead>

        <article className="mt-8 grid grid-cols-[6.75rem_1fr] items-start gap-4 border-t hairline pt-6 md:mt-14 md:grid-cols-12 md:gap-10 md:pt-10 lg:mt-16 lg:gap-14">
          <Plate
            src={lead.image}
            alt={`${lead.name}, ${lead.role[lang]}`}
            sizes="(min-width: 768px) 42vw, 28vw"
            position={lead.position}
            className="aspect-[3/4] md:col-span-5 md:aspect-[4/5]"
          />
          <div className="md:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[1.65rem] italic leading-none text-heading md:text-5xl">{lead.name}</h3>
                <p className="kicker mt-3">{lead.role[lang]}</p>
                {lead.gmc ? <p className="mt-3 text-sm tracking-[0.12em] text-kicker">GMC {lead.gmc}</p> : null}
              </div>
              <Image
                src="/media/logo/espacio-roundel-dr-liliana.png"
                alt={t.team.roundelAlt}
                width={92}
                height={92}
                className="hidden h-[4.6rem] w-[4.6rem] shrink-0 object-contain sm:block"
              />
            </div>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-snug md:mt-6 md:text-[1.05rem] md:leading-relaxed">{t.team.located}</p>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-snug md:mt-6 md:text-base md:leading-relaxed">{t.team.pride}</p>
            {leadBio ? (
              <Accordion type="single" collapsible className="mt-8">
                <AccordionItem value="bio">
                  <AccordionTrigger>{t.team.bio}</AccordionTrigger>
                  <AccordionContent>
                    <div className="max-w-xl space-y-4 leading-relaxed">
                      {leadBio.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : null}
          </div>
        </article>
      </div>

      <Plate
        src="/media/plates/team-edinburgh-castle.jpg"
        alt={t.team.castleAlt}
        sizes="100vw"
        position="center 40%"
        className="mt-16 aspect-[16/9] md:mt-20 md:aspect-[21/9]"
      />

      <div className="mx-auto mt-16 grid max-w-page gap-x-8 gap-y-14 px-5 sm:grid-cols-2 md:px-10 lg:mt-24 lg:grid-cols-3 lg:px-16">
        {rest.map((person) => {
          const bio = biography(person.id, lang);
          return (
            <article key={person.id}>
              <Plate
                src={person.image}
                alt={`${person.name}, ${person.role[lang]}`}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                position={person.position}
                className="aspect-[4/5]"
              />
              <h3 className="mt-5 font-display text-3xl italic text-heading">{person.name}</h3>
              <p className="kicker mt-2">{person.role[lang]}</p>
              {person.gmc ? <p className="mt-2 text-sm tracking-[0.12em] text-kicker">GMC {person.gmc}</p> : null}
              {bio ? (
                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value="bio">
                    <AccordionTrigger>{t.team.bio}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-[0.98rem] leading-relaxed">
                        {bio.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
