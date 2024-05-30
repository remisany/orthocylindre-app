import React from 'react';
import type {Metadata, Viewport} from "next";

//import styles
import { inter } from '@/app/ui/fonts';
import "@/app/ui/styles/globals.scss";

//import Google Analytics
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Orthocylindre",
  manifest: "/manifest.json",
  description: "Orthocylindre est un outil pour convertir une prescription de lunette cylindre positif en négatif ou inversement.",
  authors: [{ name: "Rémi SANY" }],
};

export const viewport: Viewport = {
  width: "width=device-width",
  initialScale: 1.0,
  interactiveWidget: "resizes-content"
}

const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  const id: string = process.env.ORTHOCYLINDRE_PUBLIC_MEASUREMENT_ID!

  return (
    <html lang="fr">
      <GoogleAnalytics gaId={id} />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

export default RootLayout
