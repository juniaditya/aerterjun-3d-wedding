export type Language = "id" | "en";

export const siteConfig = {
  brand: "AERTERJUN",
  descriptor: "3D Wedding Visualization",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281255000943"
};

export const whatsappMessage: Record<Language, string> = {
  id: "Halo AerTerjun, saya tertarik dengan layanan 3D Wedding Visualization. Saya ingin mendiskusikan kebutuhan visualisasi untuk project wedding kami.",
  en: "Hello AerTerjun, I'm interested in your 3D Wedding Visualization service. I'd like to discuss the visualization requirements for our wedding project."
};

export function whatsappUrl(language: Language) {
  const recipient = siteConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${recipient}?text=${encodeURIComponent(whatsappMessage[language])}`;
}
