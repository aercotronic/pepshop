import { site } from "@/lib/site";

export default function ContactPage() {
  const email = site.contactEmail;

  return (
    <div className="page-enter space-y-6">
      <h1 className="text-2xl font-bold">Contact</h1>

      <div className="card p-7 space-y-4">
        <p className="muted text-sm leading-relaxed">
          For product questions or order inquiries, email us and include the product name (and SKU if shown).
        </p>

        {email === "YOUR_EMAIL_HERE" ? (
          <p className="text-sm text-white/70">
            Replace <code className="text-white">YOUR_EMAIL_HERE</code> in <code className="text-white">lib/site.ts</code>.
          </p>
        ) : (
          <a className="btn btn-primary" href={`mailto:${email}`}>
            Email {email}
          </a>
        )}

        <div className="text-xs text-white/60 pt-2">
          Research/lab context only. Not for human consumption. No medical claims are made or implied.
        </div>
      </div>
    </div>
  );
}
