import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import lotusPond from "@/assets/lotus-pond.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const BrandStory = () => {
  return (
    <section className="section-padding bg-background lv-pattern">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={lotusPond}
                alt="Lotus pond in Mithila, India - the birthplace of Maxana makhana"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-8 rounded-3xl shadow-luxury border border-border/30 max-w-xs hidden md:block">
              <p className="font-heading text-3xl text-primary mb-2">Since 2024</p>
              <p className="text-muted-foreground font-medium">
                Crafting wellness from nature
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 luxury-badge mb-6">
              <Sparkles className="w-3 h-3 text-gold" />
              <span>Our Heritage</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 font-medium">
              From Mithila's Waters to Your Table
            </h2>
            <div className="divider-gold mb-10" />

            <div className="space-y-6 text-muted-foreground mb-10">
              <p className="text-lg leading-relaxed">
                In the serene ponds of Mithila, where lotus flowers bloom under
                the golden sun, a centuries-old tradition of cultivating makhana
                continues to thrive.
              </p>
              <p className="leading-relaxed">
                Maxana was born from a vision to share this remarkable superfood
                with the world, honoring the artisans who have perfected its
                cultivation while meeting the demands of modern wellness.
              </p>
            </div>

            <Button variant="luxury" size="lg" asChild>
              <Link to="/about">
                <span>Discover Our Journey</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
