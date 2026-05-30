import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import jsvLogo from "@/assets/jsv-logo.png";

/**
 * Splash — the JSV logo itself blooms.
 * Stage 1: only the center petal is visible (narrow vertical slice, tall & thin).
 * Stage 2: the slice expands horizontally, revealing the side petals fanning out.
 * Stage 3: the full logo (flower + wordmark) settles into place with a soft glow.
 */
const Splash = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setShowEnter(true), 3200);
    return () => clearTimeout(t);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => navigate("/home"), 700);
  };

  return (
    <AnimatePresence mode="wait">
      {!isExiting ? (
        <motion.div
          key="splash"
          className="fixed inset-0 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
          onClick={showEnter ? handleEnter : undefined}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, hsl(48 95% 92%) 0%, hsl(45 80% 82%) 35%, hsl(38 65% 65%) 75%, hsl(22 45% 28%) 100%)",
          }}
        >
          {/* Ambient glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(48 100% 78% / 0.6), transparent 70%)",
            }}
            animate={{ scale: [0.85, 1.1, 0.95], opacity: [0.4, 0.75, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center px-8">
            {/* The actual logo image — animated as one piece via clip-path so the
                center petal appears first, then the side petals fan out, then
                the wordmark reveals beneath. */}
            <motion.div
              className="relative w-72 md:w-96 lg:w-[28rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={jsvLogo}
                alt="JSV International LLP"
                className="w-full h-auto drop-shadow-[0_10px_40px_hsl(38_70%_35%/0.45)]"
                initial={{
                  clipPath: "inset(0% 46% 55% 46%)",
                  scale: 0.55,
                  y: 20,
                }}
                animate={{
                  clipPath: [
                    "inset(0% 46% 55% 46%)", // narrow vertical sliver — only center petal
                    "inset(0% 8% 55% 8%)",   // horizontal bloom — side petals fan out
                    "inset(0% 0% 0% 0%)",    // full wordmark revealed
                  ],
                  scale: [0.55, 0.85, 1],
                  y: [20, 10, 0],
                }}
                transition={{
                  duration: 2.8,
                  times: [0, 0.55, 1],
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
              />
              {/* Soft golden shimmer sweeping across the logo once revealed */}
              <motion.div
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 35%, hsl(48 100% 85% / 0.7) 50%, transparent 65%)",
                  backgroundSize: "200% 100%",
                }}
                initial={{ backgroundPosition: "200% 0%", opacity: 0 }}
                animate={{ backgroundPosition: "-100% 0%", opacity: [0, 1, 0] }}
                transition={{ duration: 1.6, delay: 2.6, ease: "easeOut" }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="font-heading text-base md:text-xl text-[hsl(22_55%_18%)] italic tracking-wide mt-8 text-center max-w-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.1 }}
            >
              From Mithila's Lotus Ponds — Refined for the World
            </motion.p>

            {/* Enter CTA */}
            <AnimatePresence>
              {showEnter && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="px-10 py-3 border border-[hsl(22_55%_22%)]/40 bg-[hsl(48_100%_88%)]/40 backdrop-blur-sm rounded-full hover:bg-[hsl(48_100%_88%)]/60 transition-colors"
                    whileHover={{ scale: 1.06 }}
                  >
                    <span className="text-xs tracking-[0.35em] uppercase text-[hsl(22_55%_18%)] font-medium">
                      Enter
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
