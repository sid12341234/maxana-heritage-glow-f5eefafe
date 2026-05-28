import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Globe, Package, Shield, Award, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Export-ready packaging meeting international food safety standards.",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Private labeling and custom packaging solutions for your brand.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "FSSAI certified with full traceability from farm to fork.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest grade makhana selected for export orders.",
  },
];

const Export = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Our export team will contact you within 24 hours.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      quantity: "",
      message: "",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Business Enquiries
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              Bulk Orders & Export
            </h1>
            <div className="h-px w-16 bg-gold mx-auto mb-8" />
            <p className="text-lg text-background/70">
              Partner with JSV International for wholesale, corporate gifting, and
              international distribution opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6 bg-muted rounded-lg"
              >
                <feature.icon size={36} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Why Partner Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Partnership Benefits
              </p>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                Why Partner with JSV International?
              </h2>
              <div className="divider-gold mb-8" />
              <ul className="space-y-4">
                {[
                  "Competitive wholesale pricing with volume discounts",
                  "Flexible MOQ for new partners",
                  "Custom flavors and private labeling available",
                  "Full documentation for international trade",
                  "Dedicated account manager for your business",
                  "Fast turnaround times and reliable shipping",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enquiry Form */}
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="font-heading text-2xl mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm"
                  />
                  <input
                    type="text"
                    placeholder="Company Name *"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Country *"
                    required
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm"
                  />
                  <input
                    type="text"
                    placeholder="Estimated Quantity"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none rounded-sm resize-none"
                />
                <Button variant="luxury" size="lg" className="w-full" type="submit">
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Export;
