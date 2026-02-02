import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="page-enter space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="muted text-sm">
          Browse available listings. Click a product for details.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
