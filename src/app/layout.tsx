import React from 'react';
import type {Metadata, Viewport} from "next";
import "@/app/ui/styles/globals.scss";
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Orthocylindre",
  manifest: "/manifest.json",
  description: "Orthocylindre est une plateforme",
  authors: [{ name: "Rémi SANY" }],
};

export const viewport: Viewport = {
  width: "width=device-width",
  height: "height=device-height",
  initialScale: 1.0,
}

const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

export default RootLayout
