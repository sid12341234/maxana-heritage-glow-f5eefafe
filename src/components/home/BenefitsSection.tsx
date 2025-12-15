import { motion } from "framer-motion";
import {
  Dumbbell,
  Heart,
  Flame,
  Zap,
  Sparkles,
  Leaf,
  Brain,
  Battery,
} from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Rich in Plant Protein",
    description: "Complete amino acid profile for muscle health and recovery",
  },
  {
    icon: Flame,
    title: "Low Calorie",
    description: "Guilt-free snacking with high satiety factor",
  },
  {
    icon: Heart,
    title: "Heart-Healthy",
    description: "Low sodium and beneficial for cardiovascular health",
  },
  {
    icon: Zap,
    title: "Weight Management",
    description: "Keeps you full longer, supporting healthy weight goals",
  },
  {
    icon: Sparkles,
    title: "High in Antioxidants",
    description: "Fights free radicals and supports cellular health",
  },
  {
    icon: Leaf,
    title: "Easy to Digest",
    description: "Gentle on the stomach, suitable for all ages",
  },
  {
    icon: Brain,
    title: "Cognitive Support",
    description: "Thiamine-rich for brain health and mental clarity",
  },
  {
    icon: Battery,
    title: "Natural Energy",
    description: "Sustained energy release without crashes",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Superfood Benefits
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            The Power of Makhana
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-gold to-gold/50 mx-auto" />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 border border-background/10 rounded-lg hover:border-gold/30 transition-colors group"
            >
              <benefit.icon
                size={32}
                className="text-gold mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="font-heading text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-background/60">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
