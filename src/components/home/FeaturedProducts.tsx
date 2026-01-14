import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="section-padding bg-background lv-pattern">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="gold-accent tracking-[0.4em] uppercase text-sm mb-4 font-medium">
            The Collection
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 font-medium">
            Exquisite Creations
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <Link to={`/products/${product.id}`} className="block">
                <div className="card-luxury p-8">
                  {/* Image */}
                  <div className="relative aspect-square mb-8 product-image rounded-3xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Luxury Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <p className="luxury-badge mb-4 inline-block">
                      {product.category}
                    </p>
                    <h3 className="font-heading text-2xl mb-3 font-medium">{product.name}</h3>
                    <p className="text-primary font-heading text-xl mb-6">
                      {product.price}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground group-hover:text-gold transition-colors duration-500">
                      <span className="font-medium tracking-wide">Discover</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button variant="luxury" size="lg" asChild>
            <Link to="/products">
              <span>View Full Collection</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
