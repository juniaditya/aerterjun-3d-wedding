import type { Language } from "./site";

export const copy = {
  id: {
    nav: ["Karya", "Proses", "Harga"],
    discuss: "Diskusikan Project",
    heroBody: "Visualisasi wedding 3D profesional untuk membantu Event Organizer mempresentasikan konsep dekorasi kepada client sebelum diwujudkan.",
    worksIntro: "Pilihan konsep wedding yang diterjemahkan menjadi visual 3D imersif.",
    whyBody: "Brief yang jelas pantas mendapatkan visual yang sama jelasnya.",
    values: [
      ["Konsep Lebih Mudah Dipahami", "Ubah brief, layout, dan referensi dekorasi menjadi visual yang lebih mudah dipahami client sebelum wedding direalisasikan."],
      ["Presentasi dengan Percaya Diri", "Gunakan visual 3D untuk membantu pitching, diskusi, revisi, dan approval konsep bersama client."]
    ],
    processIntro: "Lima langkah ringkas dari brief lengkap sampai final render.",
    steps: [
      ["Discuss", "Hubungi AerTerjun melalui WhatsApp dan ceritakan kebutuhan project."],
      ["Send Your Brief", "Kirim detail venue, ukuran, layout, dekorasi, bunga, referensi, dan kebutuhan visualisasi."],
      ["Scope & Quotation", "Brief dipelajari untuk menentukan scope, paket, dan final quotation berdasarkan kompleksitas."],
      ["Visualization", "Konsep diterjemahkan menjadi visual wedding 3D sesuai scope yang disepakati."],
      ["Review & Final Render", "Feedback dikumpulkan per revision round sebelum final render diserahkan."]
    ],
    pricingIntro: "Setiap project memiliki kompleksitas berbeda. Paket menjadi titik awal sebelum scope dan final quotation ditentukan dari brief.",
    starting: "Mulai dari",
    revisionNote: "Revision round berlaku untuk brief yang disepakati. Perubahan besar di luar scope awal dapat memerlukan quotation tambahan.",
    finalBody: "Kirim brief project melalui WhatsApp dan diskusikan visualisasi yang sesuai dengan kebutuhan EO Anda."
  },
  en: {
    nav: ["Works", "Process", "Pricing"],
    discuss: "Discuss Project",
    heroBody: "Professional 3D wedding visualization that helps Event Organizers present decoration concepts clearly before they become reality.",
    worksIntro: "A selection of wedding concepts translated into immersive 3D visualization.",
    whyBody: "A clear brief deserves an equally clear visual.",
    values: [
      ["Make Concepts Easier to Understand", "Turn briefs, layouts, and decoration references into visuals clients can understand before the wedding is built."],
      ["Present With Confidence", "Use professional 3D visuals to support pitching, discussion, revisions, and client approval."]
    ],
    processIntro: "Five focused steps from a complete brief to the final render.",
    steps: [
      ["Discuss", "Contact AerTerjun through WhatsApp and tell us about your project."],
      ["Send Your Brief", "Send venue details, dimensions, layout, decorations, flowers, references, and visualization requirements."],
      ["Scope & Quotation", "We review the brief to determine scope, package, and final quotation based on complexity."],
      ["Visualization", "The approved brief becomes a detailed 3D wedding visualization."],
      ["Review & Final Render", "Feedback is collected by revision round before final renders are delivered."]
    ],
    pricingIntro: "Every project has a different level of complexity. These packages are starting points before the final scope and quotation are set from your brief.",
    starting: "Starting from",
    revisionNote: "Revision rounds apply to the agreed project brief. Major changes outside the original scope may require additional quotation.",
    finalBody: "Send your project brief through WhatsApp and let's discuss the visualization scope that fits your project."
  }
} satisfies Record<Language, Record<string, unknown>>;
