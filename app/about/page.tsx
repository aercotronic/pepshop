export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">About</h1>

      <div className="card p-7 space-y-4">
        <p className="muted text-sm leading-relaxed">
          Pepshop is a small lab-focused storefront built to keep things simple: clear listings,
          straightforward product pages, and an easy way to contact us for order inquiries.
        </p>
        <p className="muted text-sm leading-relaxed">
          Our goal is to provide a clean catalog experience for GHK-related listings and basic lab accessories,
          without clutter or complicated checkout flows.
        </p>
        <p className="text-xs text-white/60">
          Disclaimer: All products are offered for laboratory/research context only. Not for human consumption.
          No medical claims are made or implied.
        </p>
      </div>
    </div>
  );
}
