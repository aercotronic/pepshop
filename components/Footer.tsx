import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-14">
      <div className="container py-10 space-y-3">
        <p className="text-sm muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="text-xs text-white/60 max-w-3xl">
          Disclaimer: Products on this website are presented for laboratory/research context only.
          Not for human consumption. No medical claims are made or implied.
        </p>
      </div>
    </footer>
  );
}
