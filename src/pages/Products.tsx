import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getCategories, getProducts, type Product, type ProductCategory } from "@/services/products";
import { ArrowRight, Sparkles } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [categoryData, productData] = await Promise.all([
        getCategories(),
        getProducts()
      ]);
      setCategories(categoryData);
      setProducts(productData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => {
        const category = categories.find(c => c.id === product.category_id);
        return category?.slug === selectedCategory;
      });

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
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 text-sm rounded-full transition-all duration-500 font-medium tracking-wide ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "bg-card hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/50"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-5 py-2.5 text-sm rounded-full transition-all duration-500 font-medium tracking-wide ${
                  selectedCategory === category.slug
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-card hover:bg-secondary text-muted-foreground hover:text-foreground border border-border/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">Loading products...</p>
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          ) : (
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
                    <div className="card-luxury overflow-hidden relative">
                      {/* Stock Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          product.stock_status === 'in_stock'
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                        }`}>
                          {product.stock_status === 'in_stock' ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative aspect-square product-image rounded-t-3xl bg-white">
                        <div className="w-full h-full flex items-center justify-center p-8">
                          <span className="text-sm text-muted-foreground">Product Image</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <p className="luxury-badge mb-4 inline-block">
                          {categories.find(c => c.id === product.category_id)?.name}
                        </p>
                        <h3 className="font-heading text-2xl mb-3 font-medium">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                        {product.specification && (
                          <p className="text-xs text-muted-foreground mb-3">
                            Size: {product.specification}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-heading text-primary">
                              ₹{product.price.toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {product.size}
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
          )}
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
