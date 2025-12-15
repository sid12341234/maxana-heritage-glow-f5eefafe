import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import creamCheesePouch from "@/assets/cream-cheese-pouch.png";
import premiumTins from "@/assets/premium-tins.png";
import himalayanSaltTin from "@/assets/himalayan-salt-tin.png";
import productsLineup from "@/assets/products-lineup.png";

const products = [
  {
    id: 1,
    name: "Cream Cheese & Onion",
    category: "Classic Pouch",
    image: creamCheesePouch,
    price: "₹299",
    weight: "100g",
    description:
      "A creamy, savory delight with the perfect balance of cheese and onion flavors.",
  },
  {
    id: 2,
    name: "Himalayan Salt & Cracked Pepper",
    category: "Signature Tin",
    image: himalayanSaltTin,
    price: "₹549",
    weight: "150g",
    description:
      "Pure Himalayan salt meets freshly cracked pepper in this sophisticated snack.",
  },
  {
    id: 3,
    name: "Premium Tin Collection",
    category: "Gift Set",
    image: premiumTins,
    price: "₹1,499",
    weight: "3 × 150g",
    description:
      "An exquisite collection featuring our three signature flavors in premium tins.",
  },
  {
    id: 4,
    name: "Family Pack Assorted",
    category: "Value Pack",
    image: productsLineup,
    price: "₹999",
    weight: "4 × 100g",
    description:
      "Explore our range with four different flavors in convenient pouch packaging.",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Our Collection
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              Premium Makhana Range
            </h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
              Each product is crafted with care, using only the finest makhana
              and premium natural ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-luxury overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-center">
                      <p className="text-xs uppercase tracking-widest text-gold mb-2">
                        {product.category}
                      </p>
                      <h3 className="font-heading text-2xl mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-heading text-primary">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {product.weight}
                        </span>
                      </div>
                      <Button variant="luxury" className="w-full">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="section-padding bg-primary">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
              Looking for Bulk Orders?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              We offer special pricing for wholesale, corporate gifting, and export
              orders. Get in touch with our team.
            </p>
            <Button
              variant="heroOutline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/export">Enquire Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
