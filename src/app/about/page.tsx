import Link from "next/link";

export default function Page() {
  return (
    <main>
      <p>About page</p>
      <Link href="/">
        <p>Go to Home page</p>
      </Link>
    </main>
  );
}
