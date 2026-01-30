export type Product = {
  slug: string;
  name: string;
  price: number;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
  sku?: string;
};

export const products: Product[] = [
  {
    slug: "ghk-cu",
    name: "GHK-Cu (Copper Peptide)",
    price: 80,
    shortDesc: "A well-known copper-binding peptide commonly referenced in research contexts.",
    longDesc:
      "GHK-Cu is a copper-binding tripeptide that appears frequently in scientific and cosmetic research literature. This listing is presented for informational purposes only.\n\nThis product is offered strictly for laboratory and research use. Not for human consumption, medical use, or diagnostic use.",
    highlights: [
      "Research-use positioning",
      "Clean, minimal product listing",
      "Inquiry-style purchase flow"
    ],
    sku: "PS-GHK-001"
  },
  {
    slug: "peptide-vial-kit",
    name: "Peptide Vial Kit",
    price: 25,
    shortDesc: "Basic lab accessories bundle for sample handling and storage.",
    longDesc:
      "A simple accessory kit designed to support routine lab handling workflows (e.g., labeling, storage, organization). This product is intended for general laboratory use.\n\nNo medical claims are made or implied.",
    highlights: ["Accessory bundle", "Simple add-on item", "Clean product page"],
    sku: "PS-KIT-002"
  },
  {
    slug: "lab-label-pack",
    name: "Lab Label Pack",
    price: 12,
    shortDesc: "Minimal, high-contrast labels for organizing research inventory.",
    longDesc:
      "A pack of high-contrast labels designed for easy readability and organization in lab settings.\n\nGeneral lab supply item. No medical claims are made or implied.",
    highlights: ["High contrast", "Organize inventory", "Minimal aesthetic"],
    sku: "PS-LBL-003"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
