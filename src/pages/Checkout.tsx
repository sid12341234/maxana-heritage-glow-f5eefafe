import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order placed successfully!", {
      description: "We'll send you a confirmation email shortly.",
    });
    clearCart();
    navigate("/home");
  };

  if (items.length === 0) {
    return (
      <Layout>
        <section className="pt-36 pb-24">
          <div className="container-luxury text-center">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="font-heading text-4xl mb-6 font-medium">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-10 text-lg">Add some products before checking out.</p>
            <Button variant="luxury" size="lg" asChild>
              <Link to="/products">Explore Collection</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

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
            <span className="text-sm font-medium tracking-wide">Back</span>
          </button>
        </div>
      </section>

      <section className="py-16 bg-muted lv-pattern">
        <div className="container-luxury">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl mb-12 font-medium text-center"
          >
            Checkout
          </motion.h1>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Cart Items */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <h2 className="font-heading text-2xl mb-6">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-card p-5 rounded-2xl border border-border/30"
                  >
                    <div className="w-20 h-20 bg-muted rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.product_image}
                        alt={item.product_name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{item.product_name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{item.product_weight}</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <p className="font-heading text-lg text-primary">{item.product_price}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-card rounded-2xl border border-border/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{total.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-emerald-600">Free</span>
                </div>
                <div className="border-t border-border/50 mt-4 pt-4 flex justify-between items-center">
                  <span className="font-heading text-xl">Total</span>
                  <span className="font-heading text-3xl text-primary">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Shipping Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="font-heading text-2xl mb-6">Shipping Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border/50 focus:border-primary focus:outline-none rounded-xl"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border/50 focus:border-primary focus:outline-none rounded-xl"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border/50 focus:border-primary focus:outline-none rounded-xl"
                />
                <textarea
                  placeholder="Delivery Address *"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border/50 focus:border-primary focus:outline-none rounded-xl resize-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City *"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border/50 focus:border-primary focus:outline-none rounded-xl"
                  />
                  <input
                    type="text"
                    placeholder="State *"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border/50 focus:border-primary focus:outline-none rounded-xl"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Pincode *"
                  required
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border/50 focus:border-primary focus:outline-none rounded-xl"
                />
                <Button variant="luxury" size="lg" type="submit" className="w-full mt-4">
                  Place Order — ₹{total.toLocaleString("en-IN")}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
