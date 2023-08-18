import Link from "next/link";

export default function Header() {
  return (
    <header className="flex mx-6 mt-6 p-5 justify-between border mb-12 shadow-outline">
      <Link href="/">EXPLORE ENROUTE</Link>
      <div>
        <Link className="mr-4" href="/">
          Blog
        </Link>
        <Link className="mr-4" href="/about">
          About
        </Link>
        <Link className="mr-4" href="/contact">
          Contact
        </Link>
      </div>
    </header>
  );
}
