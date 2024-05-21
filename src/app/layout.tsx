import React, { FC } from 'react';
import type { Metadata } from "next";
import "@/app/ui/styles/globals.scss";
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Orthocylindre",
  //generator: "Next.js",
  manifest: "/manifest.json",
  description: "Orthocylindre est une plateforme",
  authors: [{ name: "Rémi SANY" }],
};

const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

export default RootLayout
