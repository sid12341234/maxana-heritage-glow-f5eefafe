import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Sparkles, ArrowRight, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <Layout>
        <section className="pt-36 pb-24">
          <div className="container-luxury text-center">
            <h1 className="font-heading text-5xl mb-6 font-medium">Product Not Found</h1>
            <p className="text-muted-foreground mb-10 text-lg">The product you're looking for doesn't exist.</p>
            <Button variant="luxury" size="lg" asChild>
              <Link to="/products">View Collection</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="pt-32 pb-6 bg-muted lv-pattern">
        <div className="container-luxury">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium tracking-wide">Back to Collection</span>
          </button>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-16 md:py-24 bg-muted lv-pattern">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-square product-image rounded-[2.5rem] overflow-hidden shadow-luxury">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-12"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gold/15 rounded-full blur-3xl" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 luxury-badge mb-6 self-start">
                <Sparkles className="w-3 h-3 text-gold" />
                <span>{product.category}</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 font-medium">
                {product.name}
              </h1>
              <div className="divider-gold mb-8" />

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.longDescription}
              </p>

              <p className="text-lg text-foreground mb-2 font-medium">
                {product.weight}
              </p>
              <p className="text-muted-foreground mb-10">
                Pricing available on request — enquire for current rates.
              </p>

              {/* Benefits Tags */}
              <div className="flex flex-wrap gap-3 mb-10">
                {product.benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-card text-sm rounded-2xl border border-border/50 font-medium"
                  >
                    {benefit}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-4">
                <Button variant="luxury" size="lg" className="flex-1" asChild>
                  <Link to="/contact">
                    <Mail className="w-5 h-5 mr-3" />
                    Enquire Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-heading text-3xl mb-8 font-medium">Premium Ingredients</h2>
              <ul className="space-y-4">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/30">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-foreground font-medium">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Nutritional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-heading text-3xl mb-8 font-medium">Nutritional Information</h2>
              <p className="text-sm text-muted-foreground mb-6 font-medium tracking-wide">Per 30g serving</p>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                  <div key={key} className="bg-card p-6 rounded-2xl border border-border/30">
                    <p className="text-sm text-muted-foreground capitalize mb-2 font-medium">{key}</p>
                    <p className="font-heading text-2xl">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-muted lv-pattern">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <p className="gold-accent tracking-[0.4em] uppercase text-sm mb-4 font-medium">
                Complete Your Collection
              </p>
              <h2 className="font-heading text-4xl font-medium">You May Also Love</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {relatedProducts.map((relProduct, index) => (
                <motion.div
                  key={relProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={`/products/${relProduct.id}`} className="block group">
                    <div className="card-luxury p-8">
                      <div className="aspect-square mb-6 product-image rounded-3xl overflow-hidden">
                        <img
                          src={relProduct.image}
                          alt={relProduct.name}
                          className="w-full h-full object-contain p-6 transition-all duration-700 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-heading text-xl mb-3 font-medium">{relProduct.name}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-primary font-heading text-lg">{relProduct.weight}</p>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
