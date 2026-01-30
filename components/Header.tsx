import Link from "next/link";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="text-lg font-bold tracking-wide">
          {site.name}
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link className="muted hover:text-white" href="/">Home</Link>
          <Link className="muted hover:text-white" href="/products">Products</Link>
          <Link className="muted hover:text-white" href="/about">About</Link>
          <Link className="muted hover:text-white" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
