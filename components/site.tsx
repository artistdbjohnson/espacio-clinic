"use client";

import { Core } from "@/components/core";
import { Difference } from "@/components/difference";
import { Espacio } from "@/components/espacio";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Opening } from "@/components/opening";
import { Process } from "@/components/process";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import { Treatments } from "@/components/treatments";
import { Visit } from "@/components/visit";
import { I18nProvider, useI18n } from "@/lib/i18n";

function Page() {
  const { t } = useI18n();
  return (
    <div id="top">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-background focus:px-3 focus:py-2">
        {t.skip}
      </a>
      <Opening />
      <Nav />
      <main id="content">
        <Hero />
        <Difference />
        <Treatments />
        <Process />
        <Team />
        <Core />
        <Testimonials />
        <Espacio />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export function Site() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  );
}
