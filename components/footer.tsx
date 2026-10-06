"use client";

import Image from "next/image";
import { COMPLAINTS, DUTY, EMAIL, FACEBOOK, INSTAGRAM, TEL_HREF, TEL_LABEL } from "@/lib/messages";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-28 border-t hairline md:mt-40">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-16 md:px-10 lg:grid-cols-12 lg:px-16 lg:py-20">
        <div className="lg:col-span-4">
          <Image
            src="/media/logo/espacio-logo-peach.png"
            alt="espacio"
            width={180}
            height={180}
            className="h-16 w-auto object-contain object-left"
          />
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-kicker">
            12a Castle Terrace
            <br />
            Edinburgh, EH1 2DP
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="kicker">Menu</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="#top" className="hover:text-heading">{t.footer.home}</a></li>
            <li><a href="#team" className="hover:text-heading">{t.footer.about}</a></li>
            <li><a href="#treatments" className="hover:text-heading">{t.footer.treatments}</a></li>
            <li><a href={DUTY} target="_blank" rel="noopener noreferrer" className="hover:text-heading">{t.footer.duty}</a></li>
            <li><a href={COMPLAINTS} target="_blank" rel="noopener noreferrer" className="hover:text-heading">{t.footer.complaints}</a></li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="kicker">{t.footer.contact}</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={TEL_HREF}>{t.nav.tel} {TEL_LABEL}</a></li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          </ul>
          <p className="kicker mt-8">{t.footer.socials}</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">{t.footer.instagram}</a></li>
            <li><a href={FACEBOOK} target="_blank" rel="noopener noreferrer">{t.footer.facebook}</a></li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="kicker">{t.footer.registered}</p>
          <p className="mt-5 text-sm leading-relaxed">
            HIS
            <span className="mx-2 text-peach">·</span>
            BCAM
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-page flex-col gap-3 border-t hairline px-5 py-6 text-[0.72rem] tracking-[0.08em] text-kicker md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <p>{t.footer.copy}</p>
        <p>{t.footer.credit}</p>
      </div>
    </footer>
  );
}
