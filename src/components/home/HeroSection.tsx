import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import jsvLogo from "@/assets/jsv-logo.png";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, hsl(48 95% 94%) 0%, hsl(45 80% 84%) 40%, hsl(38 60% 70%) 75%, hsl(22 35% 32%) 100%)",
      }}
    >
      {/* Ambient golden glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(48 100% 78% / 0.5), transparent 70%)",
        }}
        animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, hsl(48 100% 85% / 0.35) 50%, transparent 70%)",
          backgroundSize: "300% 300%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "200% 200%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle pattern */}
      <div className="absolute inset-0 lv-pattern opacity-30" />

      <div className="container-luxury relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 luxury-badge mb-6">
              <Sparkles className="w-3 h-3 text-gold" />
              <span>Premium Makhana from Mithila</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-8 font-medium text-[hsl(22_55%_18%)]">
              The Art of
              <span
                className="block italic mt-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, hsl(38 75% 38%), hsl(45 90% 55%), hsl(38 75% 38%))",
                }}
              >
                Refined
              </span>
              <span className="block">Indulgence</span>
            </h1>

            <p className="text-[hsl(22_45%_28%)]/80 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Handcrafted from the pristine lotus ponds of Mithila, our premium
              makhana embodies centuries of tradition — reimagined for the
              modern connoisseur.
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

            <div className="flex flex-wrap gap-8 mt-14 justify-center lg:justify-start">
              {["100% Natural", "Superfood", "Handcrafted"].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-3 text-sm text-[hsl(22_45%_28%)]/75"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-gold to-gold-light rounded-full shadow-gold" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual — the JSV logo, floating */}
          <motion.div
            className="relative flex items-center justify-center"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Halo */}
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, hsl(48 100% 75% / 0.7), transparent 65%)",
              }}
            />
            <motion.img
              src={jsvLogo}
              alt="JSV International LLP"
              className="relative w-72 md:w-96 lg:w-[28rem] h-auto drop-shadow-[0_15px_50px_hsl(38_70%_30%/0.4)]"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none mix-blend-overlay rounded-full"
              style={{
                background:
                  "linear-gradient(110deg, transparent 40%, hsl(48 100% 85% / 0.5) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["200% 0%", "-100% 0%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 border-2 border-[hsl(22_55%_22%)]/30 rounded-full flex justify-center pt-2">
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
