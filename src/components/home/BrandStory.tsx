import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import lotusPond from "@/assets/lotus-pond.jpg";

const BrandStory = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={lotusPond}
                alt="Lotus pond in Mithila, India - the birthplace of Maxana makhana"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-elegant border border-border max-w-xs hidden md:block">
              <p className="font-heading text-2xl text-primary mb-1">Since 2024</p>
              <p className="text-sm text-muted-foreground">
                Crafting wellness from nature
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              From Mithila's Waters to Your Table
            </h2>
            <div className="divider-gold mb-8" />

            <div className="space-y-6 text-muted-foreground mb-8">
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
              <Link to="/about">Discover Our Journey</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
