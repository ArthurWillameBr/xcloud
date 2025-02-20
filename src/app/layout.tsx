import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XCLOUD - gerencie a nuvem",
  description:
    "O xCloud representa um avanço significativo no gerenciamento de ambientes de nuvem complexos, oferecendo às empresas uma solução única para controlar, otimizar e inovar em suas infraestruturas de TI. Com sua capacidade de integrar diversas plataformas de nuvem e ferramentas essenciais como GitLab e Docker, o xCloud se posiciona como uma ferramenta indispensável para organizações que buscam agilidade, eficiência e controle em suas operações de nuvem.",
  authors: [{ name: "Claudeci Almeida" }],
  keywords: [
    "Computação em Nuvem",
    "Gerenciamento de Nuvem",
    "Infraestrutura de TI",
    "Otimização de Recursos",
    "Integração de Ferramentas",
    "GitLab",
    "Docker",
    "Eficiência Operacional",
    "Controle de Ambientes de TI",
  ],
  openGraph: {
    title: "XCLOUD - gerencie a nuvem",
    description:
      "O xCloud representa um avanço significativo no gerenciamento de ambientes de nuvem complexos, oferecendo às empresas uma solução única para controlar, otimizar e inovar em suas infraestruturas de TI. Com sua capacidade de integrar diversas plataformas de nuvem e ferramentas essenciais como GitLab e Docker, o xCloud se posiciona como uma ferramenta indispensável para organizações que buscam agilidade, eficiência e controle em suas operações de nuvem.",
    type: "website",
    locale: "pt_br",
    url: "https://xcloud.tec.br/",
    siteName: "XCLOUD - gerencie a nuvem",
    images: [
      {
        url: "https://xcloud.tec.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "XCLOUD - gerencie a nuvem",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-200 bg-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
