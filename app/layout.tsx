import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const themeBoot = `
try {
  document.documentElement.classList.add("js");
  var t = localStorage.getItem("espacio-theme");
  if (t === "dark") document.documentElement.classList.add("dark");
  var l = localStorage.getItem("espacio-lang");
  if (l === "pt") document.documentElement.lang = "pt";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) document.documentElement.classList.add("motion");
  var seen = sessionStorage.getItem("espacio-open");
  var hash = location.hash && location.hash.length > 1;
  if (!reduce && !seen && !hash) document.documentElement.classList.add("is-opening");
} catch (e) {}
`;

export const metadata: Metadata = {
  title: "Espacio Clinic Led by Dr Liliana | Medical Aesthetics Edinburgh",
  description:
    "At Espacio Clinic our primary focus is healthy ageing. Our team of medical experts will empower you and support you in your personal journey.",
  icons: { icon: "/media/logo/espacio-mark-peach.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <Script id="espacio-boot" strategy="beforeInteractive">
          {themeBoot}
        </Script>
        {children}
      </body>
    </html>
  );
}
