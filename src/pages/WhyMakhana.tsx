import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import {
  Dumbbell,
  Heart,
  Flame,
  Zap,
  Sparkles,
  Leaf,
  Brain,
  Battery,
  Scale,
  Baby,
  Timer,
  Check,
} from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "High in Protein",
    stat: "9.7g per 100g",
    description:
      "Complete amino acid profile supports muscle health, tissue repair, and keeps you feeling satisfied longer.",
  },
  {
    icon: Flame,
    title: "Low in Calories",
    stat: "~350 kcal per 100g",
    description:
      "Enjoy guilt-free snacking with significantly fewer calories than typical snacks like chips or cookies.",
  },
  {
    icon: Heart,
    title: "Heart Healthy",
    stat: "Zero Cholesterol",
    description:
      "Naturally low in sodium and fat, making it an excellent choice for cardiovascular wellness.",
  },
  {
    icon: Scale,
    title: "Weight Management",
    stat: "High Satiety",
    description:
      "The unique texture and fiber content help you feel full, reducing overall calorie intake.",
  },
  {
    icon: Sparkles,
    title: "Rich in Antioxidants",
    stat: "Kaempferol Rich",
    description:
      "Contains powerful antioxidants that fight free radicals and support cellular health.",
  },
  {
    icon: Leaf,
    title: "Gentle Digestion",
    stat: "Easily Digestible",
    description:
      "Light on the stomach and suitable for all ages, including children and elderly.",
  },
  {
    icon: Brain,
    title: "Brain Function",
    stat: "Thiamine Rich",
    description:
      "Supports cognitive function and nerve health with naturally occurring B vitamins.",
  },
  {
    icon: Battery,
    title: "Sustained Energy",
    stat: "Complex Carbs",
    description:
      "Provides steady, sustained energy without the spikes and crashes of refined snacks.",
  },
];

const comparisons = [
  { name: "Makhana", calories: "~90", protein: "2.9g", fat: "0.1g", isMaxana: true },
  { name: "Potato Chips", calories: "~160", protein: "1.5g", fat: "10g", isMaxana: false },
  { name: "Cookies", calories: "~150", protein: "1g", fat: "7g", isMaxana: false },
  { name: "Popcorn", calories: "~120", protein: "2g", fat: "6g", isMaxana: false },
];

const WhyMakhana = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              The Ancient Superfood
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              Why Makhana?
            </h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
              Discover why this ancient superfood is taking the modern wellness
              world by storm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Makhana */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                The Origin
              </p>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                What is Makhana?
              </h2>
              <div className="divider-gold mb-8" />
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Makhana, also known as Fox Nuts or Lotus Seeds, are the edible
                  seeds of the Euryale ferox plant. They've been cultivated in the
                  ponds of Bihar, India, for over 3,000 years.
                </p>
                <p>
                  Traditionally used in Ayurvedic medicine and religious ceremonies,
                  makhana has now emerged as a global superfood, prized for its
                  exceptional nutritional profile and versatility.
                </p>
                <p>
                  When roasted, these seeds puff up to create a light, crunchy snack
                  that's naturally low in calories but high in satisfaction—making
                  them the perfect guilt-free indulgence.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Timer, label: "3000+ Years", sub: "Of tradition" },
                { icon: Leaf, label: "100%", sub: "Natural" },
                { icon: Baby, label: "All Ages", sub: "Safe for everyone" },
                { icon: Check, label: "Ayurveda", sub: "Approved" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="bg-muted p-6 rounded-lg text-center"
                >
                  <item.icon size={32} className="text-primary mx-auto mb-3" />
                  <p className="font-heading text-xl">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Health Benefits
            </p>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Packed with Goodness
            </h2>
            <div className="h-px w-16 bg-gold mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 border border-background/10 rounded-lg hover:border-gold/30 transition-colors"
              >
                <benefit.icon size={28} className="text-gold mb-3" />
                <h3 className="font-heading text-lg mb-1">{benefit.title}</h3>
                <p className="text-gold text-sm mb-3">{benefit.stat}</p>
                <p className="text-sm text-background/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              The Smart Choice
            </p>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Makhana vs. Other Snacks
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Per 30g serving comparison
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 font-heading">Snack</th>
                  <th className="text-center py-4 font-heading">Calories</th>
                  <th className="text-center py-4 font-heading">Protein</th>
                  <th className="text-center py-4 font-heading">Fat</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item) => (
                  <tr
                    key={item.name}
                    className={`border-b border-border/50 ${
                      item.isMaxana ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="py-4 font-medium">
                      {item.isMaxana && (
                        <span className="text-gold mr-2">★</span>
                      )}
                      {item.name}
                    </td>
                    <td className="text-center py-4">{item.calories}</td>
                    <td className="text-center py-4">{item.protein}</td>
                    <td className="text-center py-4">{item.fat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyMakhana;
