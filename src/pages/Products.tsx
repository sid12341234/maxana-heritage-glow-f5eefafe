import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { products, bulkGrades } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useSound } from "@/contexts/SoundContext";
import { ArrowRight, Sparkles, ShoppingBag, MessageCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919608429953";

const Products = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const { play } = useSound();
  const [enquiry, setEnquiry] = useState({
    name: "",
    phone: "",
    quantity: "",
    grade: "",
    message: "",
  });

  const handleAddToCart = async (id: string) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;
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

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    play("success");
    toast.success("Enquiry received! Our team will reach out shortly.");
    setEnquiry({ name: "", phone: "", quantity: "", grade: "", message: "" });
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi JSV International, I'd like live bulk pricing for raw makhana."
  )}`;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-muted lv-pattern">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 luxury-badge mb-6">
              <Sparkles className="w-3 h-3 text-accent" />
              <span>Raw Makhana — Retail & Bulk</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6 font-medium">
              Our Collection
            </h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hand-picked raw makhana from Mithila — available as ready-to-buy
              250g retail packs and as graded loose bulk for dealers and exporters.
            </p>
            <div className="flex justify-center gap-3 mt-8">
              <a href="#retail" className="px-5 py-2.5 text-sm rounded-full bg-primary text-primary-foreground font-medium tracking-wide shadow-elegant hover:opacity-90 transition">
                Retail Packs
              </a>
              <a href="#bulk" className="px-5 py-2.5 text-sm rounded-full bg-card border border-border text-foreground font-medium tracking-wide hover:bg-secondary transition">
                Bulk / Loose
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RETAIL SECTION */}
      <section id="retail" className="section-padding bg-background scroll-mt-24">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent tracking-[0.3em] uppercase text-sm mb-3 font-medium">Retail · 250g Packs</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-4 font-medium">Buy by the Pack</h2>
            <div className="divider-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-luxury overflow-hidden h-full flex flex-col">
                  <Link to={`/products/${product.id}`} onClick={() => play("click")}>
                    <div className="relative aspect-square product-image rounded-t-3xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-8 transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                  <div className="p-8 flex flex-col flex-1">
                    <p className="luxury-badge mb-4 inline-block self-start">{product.category}</p>
                    <h3 className="font-heading text-2xl mb-3 font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <div className="flex items-baseline gap-2 mb-5">
                      <span className="text-3xl font-heading text-primary">{product.price}</span>
                      <span className="text-xs text-muted-foreground">/ {product.weight}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="luxury"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleAddToCart(product.id)}
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="sm" asChild onClick={() => play("click")}>
                        <Link to={`/products/${product.id}`}>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BULK SECTION */}
      <section id="bulk" className="section-padding bg-muted lv-pattern scroll-mt-24">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-accent tracking-[0.3em] uppercase text-sm mb-3 font-medium">Bulk · Loose Supply</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-4 font-medium">For Dealers & Retailers</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wholesale raw makhana from our Mithila unit, graded by suta size and
              available in Standard and Hand-Picked (HP) variants.
            </p>
          </motion.div>

          {/* Live pricing banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-accent/15 border border-accent/40 rounded-2xl p-5 mb-10 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <p className="text-sm md:text-base text-foreground">
              <strong>Rates fluctuate daily</strong> — message us on WhatsApp for live pricing.
            </p>
          </motion.div>

          {/* Catalogue table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-luxury overflow-hidden mb-8"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px]">
                <thead className="bg-secondary/60">
                  <tr>
                    <th className="text-left py-4 px-6 font-heading text-sm tracking-widest uppercase">Grade</th>
                    <th className="text-left py-4 px-6 font-heading text-sm tracking-widest uppercase">Size</th>
                    <th className="text-left py-4 px-6 font-heading text-sm tracking-widest uppercase">Variant</th>
                  </tr>
                </thead>
                <tbody>
                  {bulkGrades.map((g, i) => (
                    <tr key={g.grade} className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                      <td className="py-4 px-6 font-medium">{g.grade}</td>
                      <td className="py-4 px-6 text-muted-foreground">{g.size}</td>
                      <td className="py-4 px-6">
                        {g.hp ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/20 text-foreground text-xs font-semibold tracking-wide">
                            HP · Hand-Picked
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">Machine-sorted</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-border/50 text-xs text-muted-foreground bg-card">
              <strong>HP = Handpicked (premium)</strong> · Non-HP = Machine-sorted. All prices exclusive of GST. MOQ, slabs, and export terms on request.
            </div>
          </motion.div>

          {/* Enquiry */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-foreground text-background rounded-3xl p-8 flex flex-col justify-center"
            >
              <h3 className="font-heading text-3xl mb-4">Get Live Pricing</h3>
              <p className="text-background/70 mb-6 leading-relaxed">
                Tell us the grade and quantity you need. We respond fastest on WhatsApp.
              </p>
              <Button
                variant="gold"
                size="lg"
                asChild
                onClick={() => play("click")}
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enquire on WhatsApp
                </a>
              </Button>
              <div className="mt-6 pt-6 border-t border-background/15 text-sm text-background/70">
                <p>+91 96084 29953</p>
                <p>+91 77394 10066</p>
                <p className="mt-2">Mon – Sun · 9 AM – 9 PM IST</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border rounded-3xl p-8"
            >
              <h3 className="font-heading text-2xl mb-5">Or fill the enquiry form</h3>
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <input
                  type="text" placeholder="Your Name *" required
                  value={enquiry.name} onChange={(e) => setEnquiry({ ...enquiry, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm"
                />
                <input
                  type="tel" placeholder="Phone Number *" required
                  value={enquiry.phone} onChange={(e) => setEnquiry({ ...enquiry, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text" placeholder="Quantity (kg) *" required
                    value={enquiry.quantity} onChange={(e) => setEnquiry({ ...enquiry, quantity: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm"
                  />
                  <select
                    required value={enquiry.grade}
                    onChange={(e) => setEnquiry({ ...enquiry, grade: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm"
                  >
                    <option value="">Grade interested in *</option>
                    {bulkGrades.map((g) => (
                      <option key={g.grade} value={g.grade}>{g.grade}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  placeholder="Additional details" rows={4}
                  value={enquiry.message} onChange={(e) => setEnquiry({ ...enquiry, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm resize-none"
                />
                <Button variant="luxury" size="lg" type="submit" className="w-full">
                  Submit Enquiry
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
