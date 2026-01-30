import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="card p-8">
        <h1 className="text-3xl font-bold tracking-tight">Minimal. Fast. Research-focused.</h1>
        <p className="muted mt-3 max-w-2xl leading-relaxed">
          Pepshop is a simple storefront for lab-related listings. Browse products, view details,
          and send an inquiry to place an order.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn btn-primary" href="/products">Browse Products</Link>
          <Link className="btn btn-ghost" href="/about">About the Lab</Link>
        </div>

        <div className="mt-6 text-xs text-white/60 max-w-3xl">
          Products are listed for laboratory/research context only. Not for human consumption.
          No medical claims are made or implied.
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-xl font-semibold">Featured products</h2>
          <Link className="text-sm muted hover:text-white" href="/products">View all</Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
