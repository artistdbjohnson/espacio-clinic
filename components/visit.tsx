"use client";

import { useEffect, useState } from "react";
import { EMAIL, FACEBOOK, hours, INSTAGRAM, MAPS, TEL_HREF, TEL_LABEL } from "@/lib/messages";
import { Film } from "@/components/film";
import { Plate } from "@/components/plate";
import { useI18n } from "@/lib/i18n";

const weekdayIndex: Record<string, number> = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };

const gmc = [
  ["Dr Liliana", "3522437"],
  ["Dr Becky Harley", "7264766"],
  ["Dr Sonia Keane", "7406176"],
  ["Dr Shantini Rice", "6073342"],
  ["Dr Suzie Clements", "7020266"],
];

export function Visit() {
  const { t, lang } = useI18n();
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    const label = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      weekday: "short",
    }).format(new Date());
    setToday(weekdayIndex[label] ?? null);
  }, []);

  const todayRow = today === null ? null : hours[today];
  const status = !todayRow
    ? null
    : todayRow.closed
      ? t.visit.closedToday
      : `${t.visit.openToday} ${lang === "pt" ? todayRow.ptTime : todayRow.enTime}`;

  return (
    <section id="visit" className="chapter mt-28 md:mt-40 lg:mt-48">
      <div className="mx-auto max-w-page px-5 md:px-10 lg:px-16">
        <p className="kicker">{t.visit.kicker}</p>
        <h2 className="display mt-4 text-[clamp(2.7rem,5vw,4.8rem)]">{t.visit.title}</h2>
        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-14">
          <div className="border-t hairline lg:col-span-5">
            <div className="border-b hairline py-6">
              <p className="kicker">{t.visit.addressLabel}</p>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-3 block font-display text-3xl leading-snug text-heading">
                {t.visit.address[0]}
                <br />
                {t.visit.address[1]}
              </a>
              <p className="mt-3 text-[0.72rem] uppercase tracking-[0.16em] text-kicker">{t.visit.map}</p>
            </div>
            <div className="border-b hairline py-6">
              <p className="kicker">{t.visit.contactLabel}</p>
              <a href={TEL_HREF} className="mt-3 block text-lg">
                {TEL_LABEL}
              </a>
              <a href={`mailto:${EMAIL}`} className="mt-1 block text-lg">
                {EMAIL}
              </a>
            </div>
            <div className="flex gap-6 border-b hairline py-6 text-[0.72rem] uppercase tracking-[0.16em]">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                {t.footer.instagram}
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
                {t.footer.facebook}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-end justify-between gap-4">
              <p className="kicker">{t.visit.hoursLabel}</p>
              {status ? <p className="font-display text-2xl italic text-heading md:text-3xl">{status}</p> : null}
            </div>
            <ol className="mt-4 border-t hairline">
              {hours.map((row, index) => {
                const active = index === today;
                return (
                  <li
                    key={row.id}
                    className={`grid grid-cols-[7.5rem_1fr] border-b hairline px-2 py-3.5 text-sm md:grid-cols-[9rem_1fr] md:px-3 ${active ? "bg-blush/80 text-ink dark:bg-[color-mix(in_srgb,#F2AF95_16%,transparent)] dark:text-mist" : ""}`}
                  >
                    <span className="uppercase tracking-[0.14em]">{lang === "pt" ? row.pt : row.en}</span>
                    <span>{lang === "pt" ? row.ptTime : row.enTime}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div className="relative mt-12 aspect-[16/8] overflow-hidden bg-field md:mt-16">
          <Film
            src="/media/video/arrival-film-720.mp4"
            poster="/media/video/arrival-film-poster.jpg"
            label={t.visit.film}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="kicker">{t.visit.registered}</p>
            <p className="mt-4 text-lg">{t.visit.his}</p>
            <p className="mt-2 text-lg">{t.visit.bcam}</p>
          </div>
          <div>
            <p className="kicker">{t.visit.colophon}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {gmc.map(([name, number]) => (
                <li key={number} className="flex justify-between gap-6 border-b hairline py-2">
                  <span>{name}</span>
                  <span className="tracking-[0.12em] text-kicker">{number}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 grid max-w-page gap-4 px-5 md:mt-20 md:grid-cols-2 md:px-10 lg:px-16">
        <Plate
          src="/media/plates/edinburgh-castle-skyline.jpg"
          alt={t.visit.skylineAlt}
          sizes="(min-width: 768px) 50vw, 100vw"
          position="center"
          className="aspect-[16/10]"
        />
        <Plate
          src="/media/plates/reception-mark-wall.jpg"
          alt={t.visit.receptionAlt}
          sizes="(min-width: 768px) 50vw, 100vw"
          position="center 30%"
          className="aspect-[16/10]"
        />
      </div>
    </section>
  );
}
