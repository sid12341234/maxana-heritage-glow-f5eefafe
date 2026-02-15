import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight, Sparkles } from "lucide-react";

const categories = ["All", "Raw Makhana", "Roasted Makhana"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-36 pb-24 bg-muted lv-pattern">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 luxury-badge mb-6">
              <Sparkles className="w-3 h-3 text-gold" />
              <span>Curated Excellence</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-8 font-medium">
              The Collection
            </h1>
            <div className="divider-gold mx-auto mb-10" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each creation is meticulously crafted with the finest makhana
              and premium natural ingredients, embodying our pursuit of perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-background border-b border-border/50 sticky top-0 z-40 backdrop-blur-md bg-background/95">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-sm rounded-full transition-all duration-500 font-medium tracking-wide ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-card hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/products/${product.id}`} className="block">
                  <div className="card-luxury overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-square product-image rounded-t-3xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-8 transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <p className="luxury-badge mb-4 inline-block">
                        {product.category}
                      </p>
                      <h3 className="font-heading text-2xl mb-3 font-medium">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-heading text-primary">
                            {product.price}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {product.weight}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-gold transition-all duration-500">
                          <span className="font-medium">View</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="section-padding bg-primary">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6 font-medium">
              Bespoke & Bulk Orders
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              We offer exclusive pricing for wholesale, corporate gifting, and international
              orders. Connect with our team for a personalized experience.
            </p>
            <Button
              variant="heroOutline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/export">
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
