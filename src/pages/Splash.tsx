import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import jsvLogo from "@/assets/jsv-logo.png";

const Splash = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setShowEnter(true), 2400);
    return () => clearTimeout(t);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => navigate("/home"), 900);
  };

  // 5 lotus petals around the center
  const petals = [
    { rotate: -60, delay: 0.1 },
    { rotate: -30, delay: 0.2 },
    { rotate: 0, delay: 0.3 },
    { rotate: 30, delay: 0.2 },
    { rotate: 60, delay: 0.1 },
  ];

  return (
    <AnimatePresence mode="wait">
      {!isExiting ? (
        <motion.div
          key="splash"
          className="fixed inset-0 bg-background flex flex-col items-center justify-center cursor-pointer overflow-hidden lv-pattern"
          onClick={showEnter ? handleEnter : undefined}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Ambient glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl"
            animate={{ scale: [0.8, 1.1, 0.95], opacity: [0.3, 0.6, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center px-8">
            {/* Blooming lotus petals (SVG) */}
            <div className="relative w-48 h-48 mb-6">
              <svg viewBox="-100 -100 200 200" className="w-full h-full overflow-visible">
                {petals.map((p, i) => (
                  <motion.path
                    key={i}
                    d="M 0 10 C -22 -10 -22 -55 0 -85 C 22 -55 22 -10 0 10 Z"
                    fill="hsl(38 67% 55%)"
                    initial={{ scale: 0, rotate: 0, opacity: 0 }}
                    animate={{ scale: 1, rotate: p.rotate, opacity: 0.95 }}
                    transition={{
                      duration: 1.1,
                      delay: 0.2 + p.delay,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ transformOrigin: "0px 10px" }}
                  />
                ))}
                {/* Center bud */}
                <motion.circle
                  cx="0" cy="10" r="8"
                  fill="hsl(18 43% 18%)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
              </svg>
            </div>

            {/* Logo */}
            <motion.img
              src={jsvLogo}
              alt="JSV International LLP"
              className="h-28 md:h-36 w-auto object-contain mb-4"
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Divider */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-4"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
              <div className="w-2 h-2 bg-accent rounded-full" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="font-heading text-lg md:text-2xl text-muted-foreground italic tracking-wide mb-10 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              From Mithila's Lotus Ponds — Refined for the World
            </motion.p>

            {/* Enter CTA */}
            <AnimatePresence>
              {showEnter && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center gap-4"
                >
                  <motion.div
                    className="px-10 py-3 border border-primary/30 rounded-full hover:border-accent transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-medium">
                      Enter
                    </span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-1 bg-accent rounded-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Corner accents */}
          {[
            "top-8 left-8 border-l border-t",
            "top-8 right-8 border-r border-t",
            "bottom-8 left-8 border-l border-b",
            "bottom-8 right-8 border-r border-b",
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute w-12 h-12 border-accent/30 ${cls}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-50 bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        />
      )}
    </AnimatePresence>
  );
};

export default Splash;
