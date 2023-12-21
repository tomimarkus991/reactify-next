import "@/index.css";

import { Metadata, Viewport } from "next";
import { Catamaran, Quicksand, Rubik } from "next/font/google";

import { cn } from "@/lib";
import { Layout } from "@/three/components/Layout";
import { NextLayoutProps } from "@/types";

import { siteConfig } from "../config";

import { AppWrapper } from "./AppWrapper";

export const viewport: Viewport = {
  themeColor: "#FFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: siteConfig.template,
  },
  description: siteConfig.description,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  formatDetection: {
    telephone: false,
  },
};

const catamaran = Catamaran({
  variable: "--catamaran-font",
  subsets: ["latin"],
});
const rubik = Rubik({
  variable: "--rubik-font",
  subsets: ["latin"],
});
const quicksand = Quicksand({
  variable: "--quicksand-font",
  subsets: ["latin"],
});

export default async function RootLayout({ children }: NextLayoutProps) {
  return (
    <html
      className="scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-full"
      lang="et"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={cn(
          "min-h-screen bg-surface-bg font-catamaran antialiased flex flex-col",
          catamaran.variable,
          rubik.variable,
          quicksand.variable,
        )}
      >
        <Layout>
          <AppWrapper>
            <div className="flex flex-col justify-between min-h-screen">
              <div className="px-4 pt-36 sm2:pt-8">{children}</div>
            </div>
          </AppWrapper>
        </Layout>
      </body>
    </html>
  );
}
