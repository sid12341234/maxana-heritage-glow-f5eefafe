import janakiMakhanaPouch from "@/assets/janaki-makhana-pouch.png";

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
  weight: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  nutritionalInfo: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
  };
  benefits: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "shahi-jumbo",
    name: "Shahi Jumbo",
    category: "Retail",
    image: janakiMakhanaPouch,
    price: "₹599",
    weight: "250g",
    description: "Our most premium pack — 6(+) Suta handpicked jumbo pops. The biggest, whitest, crunchiest makhana on our line.",
    longDescription: "Shahi Jumbo is the crown of our retail range. Sourced from the deepest lotus ponds of Mithila and hand-graded to 6(+) suta size, these jumbo pops are over 19mm of cloud-light crunch. Each piece is sun-dried, single-batch roasted and quality-checked twice — making it the finest 250g pack you can put on your table.",
    ingredients: ["100% Raw Makhana (Fox Nuts) — 6(+) Suta Handpicked, GI-tagged Mithila"],
    nutritionalInfo: { calories: "347 kcal", protein: "9.7g", carbs: "76.9g", fat: "0.1g", fiber: "14.5g" },
    benefits: ["Jumbo 6(+) Grade", "Hand-Picked", "Low Fat", "High Protein", "Antioxidant Rich"],
    featured: true,
  },
  {
    id: "khaas-makhana",
    name: "Khaas Makhana",
    category: "Retail",
    image: janakiMakhanaPouch,
    price: "₹399",
    weight: "250g",
    description: "Our everyday classic — 5 Suta makhana with great pop and consistent quality, perfect for daily snacking.",
    longDescription: "Khaas Makhana is the heart of our retail line. Graded at 5 suta, these medium-large pops deliver the perfect balance of crunch, fluffiness and value. Roast at home with a touch of ghee and rock salt, or toss into a curry — Khaas is the makhana you'll keep reaching for.",
    ingredients: ["100% Raw Makhana (Fox Nuts) — 5 Suta, GI-tagged Mithila"],
    nutritionalInfo: { calories: "347 kcal", protein: "9.7g", carbs: "76.9g", fat: "0.1g", fiber: "14.5g" },
    benefits: ["5 Suta Grade", "Daily Snack", "High Fibre", "Zero Cholesterol"],
    featured: true,
  },
  {
    id: "bachat-pack",
    name: "Bachat Pack",
    category: "Retail",
    image: janakiMakhanaPouch,
    price: "₹249",
    weight: "250g",
    description: "Family-friendly value pack — 4 Suta makhana that's wonderfully economical without compromising on freshness.",
    longDescription: "Bachat Pack is built for households that snack right every day. Graded at 4 suta with a smaller, denser pop, it's the most economical way to enjoy authentic Mithila makhana — perfect for kheer, namkeen mixes and lunchbox snacks.",
    ingredients: ["100% Raw Makhana (Fox Nuts) — 4 Suta, GI-tagged Mithila"],
    nutritionalInfo: { calories: "347 kcal", protein: "9.7g", carbs: "76.9g", fat: "0.1g", fiber: "14.5g" },
    benefits: ["4 Suta Grade", "Family Value", "Low Calorie", "Vegan"],
    featured: true,
  },
];

export interface BulkGrade {
  grade: string;
  size: string;
  hp: boolean;
}

export const bulkGrades: BulkGrade[] = [
  { grade: "3 Suta", size: "~10–12 mm", hp: false },
  { grade: "4 Suta", size: "12.5–15.5 mm", hp: false },
  { grade: "4 Suta HP", size: "12.5–15.5 mm", hp: true },
  { grade: "4(+) Plus Suta", size: "12.5–24 mm", hp: false },
  { grade: "4(+) Plus HP", size: "12.5–24 mm", hp: true },
  { grade: "5 Suta Pure", size: "15.7–19 mm", hp: false },
  { grade: "5 Suta Pure HP", size: "15.7–19 mm", hp: true },
  { grade: "5(+) Plus Non-HP", size: "15.75–24 mm", hp: false },
  { grade: "5(+) Plus HP", size: "15.75–24 mm", hp: true },
  { grade: "6(+) Plus Non-HP", size: "19–24 mm", hp: false },
  { grade: "6(+) Plus HP", size: "19–24 mm", hp: true },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const getFeaturedProducts = (): Product[] =>
  products.filter((p) => p.featured);
