import creamCheesePouch from "@/assets/cream-cheese-pouch.png";
import premiumTins from "@/assets/premium-tins.png";
import himalayanSaltTin from "@/assets/himalayan-salt-tin.png";
import productsLineup from "@/assets/products-lineup.png";
import periPeriPouch from "@/assets/peri-peri-pouch.png";
import koreanGochujangTin from "@/assets/korean-gochujang-tin.png";
import truffleParmesanTin from "@/assets/truffle-parmesan-tin.png";
import wasabiNoriPouch from "@/assets/wasabi-nori-pouch.png";
import familyAssortedPack from "@/assets/family-assorted-pack.png";

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
    id: "cream-cheese-onion",
    name: "Cream Cheese & Onion",
    category: "Roasted Makhana",
    image: creamCheesePouch,
    price: "₹299",
    weight: "100g",
    description: "A creamy, savory delight with the perfect balance of cheese and onion flavors.",
    longDescription: "Indulge in the rich, velvety taste of our Cream Cheese & Onion makhana. Each puff is carefully roasted to perfection and generously coated with a premium blend of cream cheese powder and caramelized onion seasoning. This sophisticated flavor profile makes it the perfect companion for your evening tea or as an elegant appetizer for gatherings.",
    ingredients: ["Premium Makhana (Fox Nuts)", "Cream Cheese Powder", "Onion Powder", "Rice Bran Oil", "Sea Salt", "Natural Flavors"],
    nutritionalInfo: { calories: "120 kcal", protein: "4g", carbs: "18g", fat: "3.5g", fiber: "2g" },
    benefits: ["High in Protein", "Low Glycemic Index", "Gluten-Free", "No Artificial Colors"],
    featured: true
  },
  {
    id: "himalayan-salt-pepper",
    name: "Himalayan Salt & Cracked Pepper",
    category: "Roasted Makhana",
    image: himalayanSaltTin,
    price: "₹549",
    weight: "150g",
    description: "Pure Himalayan salt meets freshly cracked pepper in this sophisticated snack.",
    longDescription: "Experience the pristine purity of pink Himalayan salt paired with the aromatic warmth of freshly cracked black pepper. Our Signature Series tin contains hand-selected makhana roasted in small batches to ensure consistent crunch and flavor. The premium tin packaging preserves freshness while making it an ideal gift for discerning palates.",
    ingredients: ["Premium Makhana (Fox Nuts)", "Pink Himalayan Salt", "Cracked Black Pepper", "Cold-Pressed Olive Oil"],
    nutritionalInfo: { calories: "110 kcal", protein: "4.5g", carbs: "16g", fat: "3g", fiber: "2.5g" },
    benefits: ["84+ Minerals from Himalayan Salt", "Antioxidant Rich", "Heart Healthy", "Keto Friendly"],
    featured: true
  },
  {
    id: "peri-peri",
    name: "Peri Peri Blaze",
    category: "Roasted Makhana",
    image: periPeriPouch,
    price: "₹299",
    weight: "100g",
    description: "Fiery African-inspired spice blend that delivers a bold, smoky heat.",
    longDescription: "Ignite your taste buds with our Peri Peri Blaze makhana. Inspired by the legendary African bird's eye chili, this flavor combines smoky paprika, garlic, lemon zest, and a carefully calibrated heat level that builds with each bite. Perfect for spice enthusiasts who crave adventure without compromising on health.",
    ingredients: ["Premium Makhana (Fox Nuts)", "Peri Peri Seasoning", "Paprika", "Garlic Powder", "Lemon Zest", "Rice Bran Oil", "Sea Salt"],
    nutritionalInfo: { calories: "115 kcal", protein: "4g", carbs: "17g", fat: "3.2g", fiber: "2g" },
    benefits: ["Metabolism Boosting", "Rich in Capsaicin", "Vegan Friendly", "No MSG"],
    featured: true
  },
  {
    id: "hot-korean",
    name: "Hot Korean Gochujang",
    category: "Roasted Makhana",
    image: koreanGochujangTin,
    price: "₹549",
    weight: "150g",
    description: "Sweet, spicy, and umami-rich Korean gochujang flavor experience.",
    longDescription: "Transport your senses to Seoul with our Hot Korean Gochujang makhana. This premium creation features the iconic Korean fermented chili paste flavor—a perfect harmony of sweet, spicy, and deeply savory umami notes. Each tin is a journey through Korean cuisine's most beloved flavor profile, reimagined as a healthy superfood snack.",
    ingredients: ["Premium Makhana (Fox Nuts)", "Gochujang Seasoning", "Korean Chili Flakes", "Sesame Seeds", "Garlic", "Rice Bran Oil", "Organic Cane Sugar"],
    nutritionalInfo: { calories: "118 kcal", protein: "4.2g", carbs: "17.5g", fat: "3.3g", fiber: "2.2g" },
    benefits: ["Probiotic Benefits", "Rich in Antioxidants", "Natural Energy Boost", "Gut-Friendly"],
    featured: false
  },
  {
    id: "truffle-parmesan",
    name: "Black Truffle & Parmesan",
    category: "Roasted Makhana",
    image: truffleParmesanTin,
    price: "₹799",
    weight: "100g",
    description: "Decadent Italian-inspired luxury with real truffle essence.",
    longDescription: "Our most luxurious creation yet. The Black Truffle & Parmesan makhana features real Italian black truffle essence and aged Parmigiano-Reggiano. Each piece is a testament to culinary excellence, offering an earthy, umami-rich experience that rivals the finest gourmet treats. Presented in our signature luxury tin.",
    ingredients: ["Premium Makhana (Fox Nuts)", "Black Truffle Essence", "Aged Parmesan Cheese", "Italian Herbs", "Extra Virgin Olive Oil", "Sea Salt"],
    nutritionalInfo: { calories: "125 kcal", protein: "5g", carbs: "15g", fat: "4.5g", fiber: "2g" },
    benefits: ["Calcium Rich", "Vitamin D", "Premium Ingredients", "Gourmet Experience"],
    featured: false
  },
  {
    id: "wasabi-nori",
    name: "Wasabi & Nori",
    category: "Roasted Makhana",
    image: wasabiNoriPouch,
    price: "₹349",
    weight: "100g",
    description: "Japanese-inspired with authentic wasabi kick and seaweed umami.",
    longDescription: "Embrace the essence of Japan with our Wasabi & Nori makhana. Real wasabi delivers a clean, nasal heat while premium nori seaweed adds deep ocean umami. This sophisticated blend appeals to sushi lovers and adventurous snackers alike, offering a unique fusion of Japanese flavors with Indian superfood tradition.",
    ingredients: ["Premium Makhana (Fox Nuts)", "Wasabi Powder", "Nori Seaweed", "Soy Sauce Powder", "Rice Bran Oil", "Sea Salt"],
    nutritionalInfo: { calories: "112 kcal", protein: "4.3g", carbs: "16.5g", fat: "3g", fiber: "2.3g" },
    benefits: ["Iodine Rich", "Antibacterial Properties", "Brain Health", "Low Sodium Option"],
    featured: false
  },
  {
    id: "premium-collection",
    name: "Premium Tin Collection",
    category: "Raw Makhana",
    image: premiumTins,
    price: "₹1,499",
    weight: "3 × 150g",
    description: "An exquisite collection featuring our three signature flavors in premium tins.",
    longDescription: "The ultimate Maxana experience. Our Premium Tin Collection brings together three of our most beloved flavors in elegant, reusable tins. Perfect for gifting or treating yourself, this collection showcases the breadth of our flavor expertise. Each tin is nestled in a luxurious gift box with our signature gold accents.",
    ingredients: ["Himalayan Salt & Pepper", "Peri Peri Blaze", "Hot Korean Gochujang"],
    nutritionalInfo: { calories: "Varies by flavor", protein: "4-5g per serving", carbs: "16-18g per serving", fat: "3-4g per serving", fiber: "2-2.5g per serving" },
    benefits: ["Variety Pack", "Premium Gifting", "Reusable Tins", "Best Value"],
    featured: false
  },
  {
    id: "family-assorted",
    name: "Family Pack Assorted",
    category: "Raw Makhana",
    image: familyAssortedPack,
    price: "₹999",
    weight: "4 × 100g",
    description: "Explore our range with four different flavors in convenient pouch packaging.",
    longDescription: "Share the joy of healthy snacking with the whole family. Our Family Pack Assorted brings together four diverse flavors to satisfy every palate. From the creamy Classic to the fiery Spice Collection, there's something for everyone. Convenient pouch packaging keeps each flavor fresh and portion-controlled.",
    ingredients: ["Cream Cheese & Onion", "Himalayan Salt & Pepper", "Peri Peri Blaze", "Wasabi & Nori"],
    nutritionalInfo: { calories: "110-120 kcal per serving", protein: "4-4.5g per serving", carbs: "16-18g per serving", fat: "3-3.5g per serving", fiber: "2-2.5g per serving" },
    benefits: ["Family Sharing", "Flavor Discovery", "Great Value", "Perfect for Parties"],
    featured: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
