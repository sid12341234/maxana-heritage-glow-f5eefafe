import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import productsLineup from "@/assets/products-lineup.png";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Luxury Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Premium makhana scattered on marble surface"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 lv-pattern opacity-50" />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10 pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-2 luxury-badge mb-6">
              <Sparkles className="w-3 h-3 text-gold" />
              <span>Premium Superfood Collection</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] mb-8 font-medium">
              The Art of
              <span className="block italic text-primary mt-2">Refined</span>
              <span className="block">Indulgence</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Handcrafted from the pristine waters of Mithila, our premium makhana 
              embodies centuries of tradition, reimagined for the modern connoisseur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <Link to="/products">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about">Our Heritage</Link>
              </Button>
            </div>

            {/* Trust Badges - Luxury Style */}
            <div className="flex flex-wrap gap-8 mt-14 justify-center lg:justify-start">
              {["100% Natural", "Superfood", "Handcrafted"].map((badge) => (
                <span key={badge} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-gradient-to-r from-gold to-gold-light rounded-full shadow-gold" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <img
                src={productsLineup}
                alt="Maxana premium makhana product range"
                className="w-full max-w-xl mx-auto animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 border-2 border-primary/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-gold rounded-full shadow-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
