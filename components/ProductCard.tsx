import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold">{product.name}</h3>
        <div className="text-sm font-semibold text-white">${product.price}</div>
      </div>
      <p className="muted text-sm leading-relaxed">{product.shortDesc}</p>
      <div className="pt-2">
        <Link className="btn btn-ghost" href={`/products/${product.slug}`}>
          View product
        </Link>
      </div>
    </div>
  );
}
