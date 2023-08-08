import "@/index.css";

import { Metadata } from "next";
import { Catamaran, Quicksand, Rubik } from "next/font/google";

import { cn } from "@/lib";
import { Layout } from "@/three/components/Layout";
import { NextLayoutProps } from "@/types";

import { AppWrapper } from "./AppWrapper";

const APP_NAME = "Reactify Next";
const APP_DEFAULT_TITLE = "Reactify Next";
const APP_TITLE_TEMPLATE = "%s - Reactify Next";
const APP_DESCRIPTION = "This is the best next template";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  themeColor: "#FFFFFF",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  icons: {
    shortcut: "/favicon.ico",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
