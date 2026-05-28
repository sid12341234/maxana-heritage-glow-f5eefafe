import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useSound } from "@/contexts/SoundContext";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  const { addToCart, setIsCartOpen } = useCart();
  const { play } = useSound();

  const handleAdd = async (product: ReturnType<typeof getFeaturedProducts>[number]) => {
    play("add-to-cart");
    try {
      await addToCart({
        product_id: product.id,
        product_name: product.name,
        product_price: product.price,
        product_image: product.image,
        product_weight: product.weight,
      });
      toast.success("Added to cart!", {
        description: `${product.name} has been added to your cart.`,
        action: { label: "View Cart", onClick: () => setIsCartOpen(true) },
      });
    } catch {
      toast.error("Failed to add to cart");
    }
  };

  return (
    <section className="section-padding bg-background lv-pattern">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent tracking-[0.4em] uppercase text-sm mb-4 font-medium">
            Retail Range
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 font-medium">
            Raw Makhana, 250g Packs
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group"
            >
              <div className="card-luxury p-8 h-full flex flex-col">
                <Link to={`/products/${product.id}`} onClick={() => play("click")}>
                  <div className="relative aspect-square mb-6 product-image rounded-3xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="text-center flex flex-col flex-1">
                  <h3 className="font-heading text-2xl mb-2 font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>
                  <p className="text-primary font-heading text-2xl mb-5">
                    {product.price}
                    <span className="text-xs text-muted-foreground ml-1">/ {product.weight}</span>
                  </p>
                  <Button variant="luxury" size="sm" onClick={() => handleAdd(product)}>
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button variant="luxury" size="lg" asChild onClick={() => play("click")}>
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
