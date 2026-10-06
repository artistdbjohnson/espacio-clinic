"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BOOKING, TEL_HREF, TEL_LABEL } from "@/lib/messages";
import { useI18n } from "@/lib/i18n";

const links = [
  { href: "#treatments", key: "treatments" },
  { href: "#team", key: "about" },
  { href: "#testimonials", key: "testimonials" },
  { href: "#visit", key: "contact" },
] as const;

export function Nav() {
  const { t, lang, setLang, theme, toggleTheme } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className="nav-frost sticky top-0 z-50"
      style={{ height: "calc(var(--nav-h) + env(safe-area-inset-top))", paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex h-full max-w-[1600px] items-center gap-3 px-4 sm:px-5 lg:gap-4 lg:px-6 xl:px-10">
        <a href="#top" className="shrink-0" aria-label="Espacio Clinic" onClick={close}>
          <span id="nav-mark" className="relative block h-11 w-[8.6rem] lg:h-12 lg:w-[9.4rem]">
            <Image
              src="/media/logo/espacio-logo-peach.png"
              alt="espacio"
              fill
              sizes="160px"
              className="object-contain object-left"
              priority
            />
          </span>
        </a>

        <nav className="ml-2 hidden min-w-0 items-center gap-x-4 lg:flex xl:ml-6 xl:gap-x-7" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.14em] text-kicker transition-colors hover:text-foreground xl:text-[0.74rem] xl:tracking-[0.16em]"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex xl:gap-4">
          <a
            href={TEL_HREF}
            className="whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.12em] text-foreground xl:text-[0.74rem] xl:tracking-[0.14em]"
          >
            <span className="text-kicker">{t.nav.tel} </span>
            {TEL_LABEL}
          </a>
          <LangToggle lang={lang} setLang={setLang} />
          <button
            type="button"
            onClick={toggleTheme}
            className="whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.14em] text-kicker"
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? t.themeLight : t.themeDark}
          </button>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="pill pill-sm whitespace-nowrap">
            {t.nav.book}
          </a>
        </div>

        <button
          type="button"
          className="ml-auto whitespace-nowrap px-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="phone-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? t.nav.close : t.nav.menu}
        </button>
      </div>

      {open ? (
        <div id="phone-menu" className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-background lg:hidden" style={{ top: "calc(var(--nav-h) + env(safe-area-inset-top))" }}>
          <nav className="flex min-h-full flex-col px-6 pb-16 pt-10" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-t hairline py-5 font-display text-4xl text-heading"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <a href={TEL_HREF} className="border-t hairline py-5 text-sm tracking-[0.14em] text-foreground">
              {t.nav.tel} {TEL_LABEL}
            </a>
            <div className="mt-8 flex items-center gap-6">
              <LangToggle lang={lang} setLang={setLang} />
              <button type="button" onClick={toggleTheme} className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-kicker">
                {theme === "dark" ? t.themeLight : t.themeDark}
              </button>
            </div>
            <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="pill mt-10 self-start" onClick={close}>
              {t.nav.book}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: "en" | "pt"; setLang: (lang: "en" | "pt") => void }) {
  return (
    <div className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.14em]">
      <button type="button" onClick={() => setLang("en")} className={lang === "en" ? "text-heading" : "text-kicker"} aria-pressed={lang === "en"}>
        EN
      </button>
      <span className="text-peach" aria-hidden>
        |
      </span>
      <button type="button" onClick={() => setLang("pt")} className={lang === "pt" ? "text-heading" : "text-kicker"} aria-pressed={lang === "pt"}>
        PT
      </button>
    </div>
  );
}
