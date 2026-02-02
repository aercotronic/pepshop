"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  const enter = () => {
    const el = document.getElementById("main-content");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="space-y-14">
      {/* Cover / Hero */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center">
        {/* Subtle background glow (extra, optional but nice) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[5%] top-[10%] h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]" />
          <div className="absolute right-[5%] bottom-[10%] h-[360px] w-[360px] rounded-full bg-white/5 blur-[120px]" />
        </div>

        <div className="card p-10 w-full">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
              Welcome to
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Pepshop
            </h1>

            <p className="muted text-sm leading-relaxed">
              A storefront experience for all things designed for peptides , clear
              product pages, and fast order inquiries.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="btn btn-primary" onClick={enter}>
                Enter
              </button>

              <Link className="btn btn-ghost" href="/products">
                View Products
              </Link>
            </div>

            <div className="pt-6 text-xs text-white/60 max-w-3xl">
              Research/lab context only. Not for human consumption. No medical
              claims are made or implied.
            </div>

            {/* Small scroll hint */}
            <button
              onClick={enter}
              className="mt-6 text-xs text-white/50 hover:text-white/70 transition"
            >
              Scroll to explore ↓
            </button>
          </div>
        </div>
      </section>

      {/* Main content below cover */}
      <div id="main-content" className="space-y-10">
        <section className="card p-8">
          <h2 className="text-2xl font-bold tracking-tight">Featured products</h2>
          <p className="muted mt-2 text-sm">
            Browse available listings. Click a product for details.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn btn-ghost" href="/products">
              View all products
            </Link>
            <Link className="btn btn-ghost" href="/about">
              About
            </Link>
            <Link className="btn btn-ghost" href="/contact">
              Contact
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
