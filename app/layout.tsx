import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AerTerjun — 3D Wedding Visualization",
  description: "Professional 3D Wedding Visualization for Event Organizers. Transform wedding decoration briefs into immersive visuals for pitching, discussion, and client approval.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "AerTerjun — 3D Wedding Visualization",
    description: "Visualize wedding concepts before they become real.",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "AerTerjun — 3D Wedding Visualization", description: "Visualize wedding concepts before they become real." }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#050505" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
