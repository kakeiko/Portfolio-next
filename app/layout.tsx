import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Portfolio - Guilherme",
  description: "Meu site Portfolio pessoal, onde compartilho meus projetos e experiências como desenvolvedor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className="bg-neutral-800"
    >
      <body className="min-h-full flex flex-col justify-center items-center">
        <div className="bg-neutral-800 w-full h-16">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
