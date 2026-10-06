import enBios from "@/content/about-en.json";
import ptBios from "@/content/bios-pt.json";

export type Person = {
  id: keyof typeof ptBios | "antonia";
  name: string;
  role: { en: string; pt: string };
  gmc?: string;
  image: string;
  position: string;
  lead?: boolean;
};

export const team: Person[] = [
  {
    id: "liliana",
    name: "Dr Liliana",
    role: { en: "Medical Director", pt: "Directora médica" },
    gmc: "3522437",
    image: "/media/portraits/dr-liliana.jpg",
    position: "center 16%",
    lead: true,
  },
  {
    id: "becky",
    name: "Dr Becky Harley",
    role: { en: "GP Skin Health Expert", pt: "Médica de família, especialista em saúde da pele" },
    gmc: "7264766",
    image: "/media/portraits/dr-becky-harley.jpg",
    position: "center 12%",
  },
  {
    id: "sonia",
    name: "Dr Sonia Keane",
    role: { en: "Women's Health & Aesthetic Doctor", pt: "Médica de saúde da mulher e estética" },
    gmc: "7406176",
    image: "/media/portraits/dr-sonia-keane.jpg",
    position: "center 14%",
  },
  {
    id: "shantini",
    name: "Dr Shantini Rice",
    role: { en: "Consultant Dermatologist", pt: "Consultora de dermatologia" },
    gmc: "6073342",
    image: "/media/portraits/dr-shantini-rice.jpg",
    position: "center 10%",
  },
  {
    id: "suzie",
    name: "Dr Suzie Clements",
    role: { en: "Longevity & Aesthetic Doctor", pt: "Médica de longevidade e estética" },
    gmc: "7020266",
    image: "/media/portraits/dr-suzie-clements.jpg",
    position: "center 12%",
  },
  {
    id: "antonia",
    name: "Antonia Graham",
    role: { en: "Aesthetic Nurse Prescriber", pt: "Enfermeira prescritora de estética" },
    image: "/media/portraits/antonia-graham.jpg",
    position: "center 18%",
  },
  {
    id: "madeleine",
    name: "Madeleine Thomas",
    role: { en: "Clinic Manager", pt: "Gestora da clínica" },
    image: "/media/portraits/madeleine-thomas.jpg",
    position: "center 14%",
  },
  {
    id: "erica",
    name: "Erica Willis",
    role: { en: "Senior Front of House", pt: "Responsável sénior de receção" },
    image: "/media/portraits/erica-willis.jpg",
    position: "center 16%",
  },
  {
    id: "natalie",
    name: "Natalie Smith",
    role: { en: "Medical Administrator", pt: "Administradora médica" },
    image: "/media/portraits/natalie-smith.jpg",
    position: "center 22%",
  },
  {
    id: "corinne",
    name: "Corinne MacDonald",
    role: { en: "Senior Medical Administrator", pt: "Administradora médica sénior" },
    image: "/media/portraits/corinne-macdonald.jpg",
    position: "center 12%",
  },
];

export function biography(id: Person["id"], lang: "en" | "pt") {
  if (id === "antonia") return null;
  return lang === "pt" ? ptBios[id] : enBios.bios[id];
}
