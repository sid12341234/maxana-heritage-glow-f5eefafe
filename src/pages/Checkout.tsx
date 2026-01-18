import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, Package, MapPin, CreditCard, CheckCircle2 } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  if (items.length === 0 && !orderComplete) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-luxury text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Package className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
              <h2 className="font-heading text-4xl mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Add some products before proceeding to checkout.
              </p>
              <Button
                variant="luxury"
                size="lg"
                onClick={() => navigate("/products")}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Continue Shopping
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  const total = getTotalPrice();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.phone && formData.address && formData.city && formData.state && formData.pincode) {
      setStep(2);
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.cardName && formData.cardNumber && formData.expiryDate && formData.cvv) {
      setOrderComplete(true);
      clearCart();
    }
  };

  if (orderComplete) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-luxury max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
              </motion.div>
              <h2 className="font-heading text-4xl md:text-5xl mb-4">Order Confirmed!</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for your order. We've sent a confirmation email to <strong>{formData.email}</strong>
              </p>
              <div className="card-luxury p-8 mb-8">
                <p className="text-muted-foreground mb-2">Order Total</p>
                <p className="font-heading text-4xl text-primary mb-6">
                  ₹{total.toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-muted-foreground">
                  Shipping to: {formData.address}, {formData.city}, {formData.state} {formData.pincode}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </Button>
                <Button
                  variant="luxury"
                  size="lg"
                  onClick={() => navigate("/products")}
                  className="gap-2"
                >
                  Continue Shopping
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-36 pb-12 bg-muted lv-pattern">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => navigate("/products")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to cart</span>
            </button>
            <h1 className="font-heading text-5xl md:text-6xl">Checkout</h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Step Indicator */}
                <div className="flex gap-4 mb-12">
                  {[1, 2].map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                        s <= step
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {s === 1 ? <MapPin className="w-5 h-5" /> : <CreditCard className="w-5 h-5" />}
                      </div>
                      <span className="font-medium">
                        {s === 1 ? "Shipping" : "Payment"}
                      </span>
                      {s < 2 && <div className="w-8 h-px bg-border ml-2" />}
                    </div>
                  ))}
                </div>

                {/* Shipping Form */}
                {step === 1 && (
                  <motion.form
                    onSubmit={handleShippingSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-heading text-2xl mb-6">Shipping Information</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Address</label>
                      <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">City</label>
                        <Input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">State</label>
                        <Input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Pincode</label>
                        <Input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <Button variant="luxury" size="lg" className="w-full mt-8">
                      Continue to Payment
                    </Button>
                  </motion.form>
                )}

                {/* Payment Form */}
                {step === 2 && (
                  <motion.form
                    onSubmit={handlePaymentSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-heading text-2xl mb-6">Payment Information</h3>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                      <Input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number</label>
                      <Input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry Date</label>
                        <Input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVV</label>
                        <Input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="flex-1"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button variant="luxury" size="lg" className="flex-1">
                        Complete Order
                      </Button>
                    </div>
                  </motion.form>
                )}
              </motion.div>
            </div>

            {/* Order Summary */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card-luxury p-8 sticky top-32"
              >
                <h3 className="font-heading text-xl mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 border-b border-border pb-6">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.product_name} × {item.quantity}
                      </span>
                      <span className="font-medium">
                        ₹{(parseFloat(item.product_price.replace('₹', '').replace(',', '')) * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>₹0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>₹0</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="flex justify-between items-baseline">
                    <span className="font-heading text-lg">Total</span>
                    <span className="font-heading text-3xl text-primary">
                      ₹{total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
