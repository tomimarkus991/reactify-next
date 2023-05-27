"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Hello world!</h1>

      <Link href="/about">
        <p className="text-xl text-blue-600 underline mb-52 underline-offset-2">About</p>
      </Link>
      <Image src="/favicon.svg" alt="Logo" className="w-60 h-60" width={24} height={24} priority />
    </div>
  );
}
