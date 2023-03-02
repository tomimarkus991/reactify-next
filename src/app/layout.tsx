/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
import "@/index.css";

import { TanstackQueryWrapper } from "./TanstackQueryWrapper";

import { Rubik } from "@next/font/google";

interface Props {
  children: React.ReactNode;
}

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }: Props) {
  return (
    <html lang="et">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={rubik.className}>
        <TanstackQueryWrapper>{children}</TanstackQueryWrapper>
      </body>
    </html>
  );
}
