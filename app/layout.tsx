import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Laise Oliveira | Estética Avançada em Petrolina",
  description:
    "Harmonização facial com naturalidade através do Método Oliveira. Agende sua avaliação com a Dra. Laise Oliveira em Petrolina.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
