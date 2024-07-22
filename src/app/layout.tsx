"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { Inter } from "next/font/google";
import "./globals.css";
import {} from 'ldrs'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Dynamically import AOS to ensure it loads on the client-side
    import("aos").then(AOS => {
      AOS.init();
    });
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="stay curious" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@next/dist/aos.css" />
      </Head>
      <body className={inter.className}>
        <Script src="https://cdn.jsdelivr.net/npm/aos@next/dist/aos.js" defer></Script>
        <Script type="module" defer src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/hatch.js"></Script>
        {children}
      </body>
    </html>
  );
}

