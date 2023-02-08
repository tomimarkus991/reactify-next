import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <p>Page content</p>
      <Link href="about">
        <p>Go to About page</p>
      </Link>
      <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
    </main>
  );
}
