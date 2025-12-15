import { motion } from "framer-motion";
import { Leaf, Heart, Wheat, Sparkles, ShieldCheck, Award } from "lucide-react";

const trustItems = [
  { icon: Leaf, label: "100% Natural" },
  { icon: Sparkles, label: "Superfood" },
  { icon: Wheat, label: "Gluten-Free" },
  { icon: Heart, label: "Vegan" },
  { icon: ShieldCheck, label: "No Preservatives" },
  { icon: Award, label: "Premium Quality" },
];

const TrustStrip = () => {
  return (
    <section className="bg-primary py-6">
      <div className="container-luxury">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 text-primary-foreground"
            >
              <item.icon size={20} className="text-gold-light" />
              <span className="text-sm tracking-wide">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
