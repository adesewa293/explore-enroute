import Link from "next/link";

export default function Header() {
  return (
    <header className="flex mt-6 p-5 justify-between mb-12 border-2 border-fuchsia-500 shadow-outline shadow-fuchsia-500">
      <Link href="/">EXPLORE ENROUTE</Link>
      <div>
        <Link
          className="mr-4 hover:underline hover:decoration-dotted underline-offset-8"
          href="/"
        >
          Blog
        </Link>
        <Link
          className="mr-4 hover:underline hover:decoration-dotted underline-offset-8"
          href="/about"
        >
          About
        </Link>
        <Link
          className="mr-4 hover:underline hover:decoration-dotted underline-offset-8"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
