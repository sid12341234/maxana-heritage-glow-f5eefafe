import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import creamCheesePouch from "@/assets/cream-cheese-pouch.png";
import premiumTins from "@/assets/premium-tins.png";
import himalayanSaltTin from "@/assets/himalayan-salt-tin.png";

const products = [
  {
    id: 1,
    name: "Cream Cheese & Onion",
    category: "Classic Collection",
    image: creamCheesePouch,
    price: "₹299",
  },
  {
    id: 2,
    name: "Premium Tin Collection",
    category: "Gift Range",
    image: premiumTins,
    price: "₹599",
  },
  {
    id: 3,
    name: "Himalayan Salt & Pepper",
    category: "Signature Series",
    image: himalayanSaltTin,
    price: "₹549",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Our Collection
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            Featured Products
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="card-luxury p-6">
                {/* Image */}
                <div className="relative aspect-square mb-6 overflow-hidden bg-muted rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {product.category}
                  </p>
                  <h3 className="font-heading text-xl mb-2">{product.name}</h3>
                  <p className="text-primary font-medium text-lg mb-4">
                    {product.price}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/products">View Product</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="luxury" size="lg" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
