import Link from "next/link";

export default function Header() {
  return (
    <header className="flex">
      <Link href="/">EXPLORE ENROUTE</Link>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
