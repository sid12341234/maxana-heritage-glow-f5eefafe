import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Splash = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

  return (
    <AnimatePresence mode="wait">
      {!isExiting ? (
        <motion.div
          className="fixed inset-0 bg-background flex flex-col items-center justify-center cursor-pointer overflow-hidden lv-pattern"
          onClick={handleEnter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full"
              initial={{
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
                y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
                scale: 0,
              }}
              animate={{
                y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : 0,
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Gold Line Accent - Top */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />

          {/* Main Content */}
          <div className="relative z-10 text-center px-8">
            {/* Luxury Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <span className="text-gold/60 tracking-[0.5em] uppercase text-xs font-medium">
                Established 2024
              </span>
            </motion.div>

            {/* Logo */}
            <motion.h1
              className="font-heading text-6xl md:text-8xl lg:text-9xl font-medium tracking-[0.2em] text-foreground mb-8"
              initial={{ opacity: 0, y: 30, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              MAXANA
            </motion.h1>

            {/* Divider */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2 h-2 bg-gold rounded-full" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
            </motion.div>

            {/* Slogan */}
            <motion.p
              className="font-heading text-xl md:text-2xl lg:text-3xl text-muted-foreground italic tracking-wide mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              The Art of Refined Indulgence
            </motion.p>

            {/* Enter CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.div
                className="px-8 py-3 border border-primary/30 rounded-full"
                whileHover={{ scale: 1.05, borderColor: "hsl(40 70% 45%)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-medium">
                  Enter
                </span>
              </motion.div>

              {/* Animated scroll indicator */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-6 h-10 border border-primary/20 rounded-full flex justify-center pt-2">
                  <motion.div
                    animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-1 bg-gold rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Gold Line Accent - Bottom */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-gold to-transparent"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />

          {/* Corner Accents */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          />
          <motion.div
            className="absolute top-8 right-8 w-16 h-16 border-r border-t border-gold/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          />
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Luxury Curtain Reveal Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary via-gold to-primary z-20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
          />
          <motion.div
            className="absolute inset-0 bg-background z-30"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
          />

          {/* Sparkle burst effect */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute z-40"
              style={{ left: '50%', top: '50%' }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1.5, 0],
                x: `${Math.cos((i * Math.PI * 2) / 12) * 300}px`,
                y: `${Math.sin((i * Math.PI * 2) / 12) * 300}px`,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <Sparkles className="text-gold w-6 h-6" />
            </motion.div>
          ))}

          {/* Exit Animation - Logo with shimmer */}
          <motion.div
            className="relative z-50 overflow-hidden"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-medium tracking-[0.2em] text-foreground relative">
              MAXANA
            </h1>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;