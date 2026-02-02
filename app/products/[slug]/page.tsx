import Link from "next/link";
import { getProductBySlug, products } from "@/lib/products";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link className="btn btn-ghost" href="/products">
          Back to products
        </Link>
      </div>
    );
  }

  const email = site.contactEmail;
  const subject = encodeURIComponent(`Order inquiry: ${product.name}`);
  const body = encodeURIComponent(
    `Hi Pepshop,\n\nI’d like to inquire about:\n- Product: ${product.name}\n- SKU: ${
      product.sku ?? "N/A"
    }\n- Price: $${product.price}\n\nQuestions/Notes:\n\nThanks!`
  );

  const mailto =
    email === "YOUR_EMAIL_HERE"
      ? "#"
      : `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div className="space-y-6">
      <Link className="muted text-sm hover:text-white" href="/products">
        ← Back to products
      </Link>

      <div className="focus-bg card p-7 space-y-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="text-white font-semibold">${product.price}</div>
          {product.sku && (
            <div className="text-xs text-white/60">SKU: {product.sku}</div>
          )}
        </div>

        <div className="space-y-3">
          {product.longDesc.split("\n\n").map((para, idx) => (
            <p key={idx} className="muted text-sm leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="border-t border-white/10 pt-5">
          <h2 className="text-sm font-semibold">Highlights</h2>
          <ul className="mt-3 grid gap-2 text-sm muted list-disc pl-5">
            {product.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {email === "YOUR_EMAIL_HERE" ? (
            <div className="text-sm text-white/70">
              Set your contact email in{" "}
              <code className="text-white">lib/site.ts</code> to enable inquiries.
            </div>
          ) : (
            <a className="btn btn-primary" href={mailto}>
              Inquire to Order
            </a>
          )}

          <Link className="btn btn-ghost" href="/contact">
            Contact
          </Link>
        </div>

        <div className="text-xs text-white/60">
          Research/lab context only. Not for human consumption. No medical claims
          are made or implied.
        </div>
      </div>
    </div>
  );
}
