import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ShoppingBag, Heart } from "lucide-react";
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
        <section className="pt-32 pb-20">
          <div className="container-luxury text-center">
            <h1 className="font-heading text-4xl mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Button variant="luxury" asChild>
              <Link to="/products">View All Products</Link>
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
      <section className="pt-28 pb-4 bg-muted">
        <div className="container-luxury">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Products</span>
          </button>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-card rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">
                {product.category}
              </p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
                {product.name}
              </h1>
              <div className="divider-gold mb-6" />
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {product.longDescription}
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-heading text-4xl text-primary">{product.price}</span>
                <span className="text-muted-foreground">/ {product.weight}</span>
              </div>

              {/* Benefits Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-sm rounded-full border border-border"
                  >
                    {benefit}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-4">
                <Button variant="luxury" size="lg" className="flex-1">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl mb-6">Ingredients</h2>
              <ul className="space-y-3">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gold" />
                    <span className="text-muted-foreground">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Nutritional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-heading text-2xl mb-6">Nutritional Information</h2>
              <p className="text-sm text-muted-foreground mb-4">Per 30g serving</p>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                  <div key={key} className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground capitalize mb-1">{key}</p>
                    <p className="font-heading text-lg">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                You May Also Like
              </p>
              <h2 className="font-heading text-3xl">Related Products</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relProduct, index) => (
                <motion.div
                  key={relProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/products/${relProduct.id}`} className="block group">
                    <div className="card-luxury p-6">
                      <div className="aspect-square mb-4 bg-secondary rounded-lg overflow-hidden">
                        <img
                          src={relProduct.image}
                          alt={relProduct.name}
                          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-heading text-lg mb-2">{relProduct.name}</h3>
                      <p className="text-primary font-medium">{relProduct.price}</p>
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
