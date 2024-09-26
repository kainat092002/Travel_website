"use client"; // Make this a client component

import React from 'react';
import localFont from 'next/font/local';
import './globals.css';
import Footer from './components/footer';
import SidebarClient from './components/SidebarClient'; // Import SidebarClient

// Load the local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// RootLayout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="relative">
        <SidebarClient>
          
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </SidebarClient>
      </body>
    </html>
  );
}
