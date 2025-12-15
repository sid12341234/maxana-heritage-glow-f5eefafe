import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import productsLineup from "@/assets/products-lineup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Premium makhana scattered on marble surface"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Premium Superfood Snacks
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              Discover the
              <span className="block italic text-primary">Art of Mindful</span>
              Snacking
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8">
              Handcrafted from the pristine waters of Mithila, our premium roasted
              makhana blends ancient heritage with modern wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                Natural
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                Superfood
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                Premium
              </span>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <img
              src={productsLineup}
              alt="Maxana premium makhana product range"
              className="w-full max-w-lg mx-auto animate-float"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
