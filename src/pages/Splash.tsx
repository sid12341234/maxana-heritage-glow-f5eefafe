import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import jsvLogo from "@/assets/jsv-logo.png";

const Splash = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t1 = setTimeout(() => setShowLogo(true), 2600);
    const t2 = setTimeout(() => setShowEnter(true), 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => navigate("/home"), 700);
  };

  // Petal shape matching the JSV logo — a pointed teardrop leaf
  const petalPath =
    "M 0 12 C -34 -8 -34 -68 0 -96 C 34 -68 34 -8 0 12 Z";

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
            {/* Stage A: SVG bloom (visible until logo image takes over) */}
            <AnimatePresence>
              {!showLogo && (
                <motion.div
                  key="bloom"
                  className="w-56 h-56 md:w-64 md:h-64"
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    viewBox="-120 -120 240 240"
                    className="w-full h-full overflow-visible"
                  >
                    <defs>
                      <linearGradient
                        id="petalGold"
                        x1="0"
                        y1="-100"
                        x2="0"
                        y2="12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#e3b860" />
                        <stop offset="55%" stopColor="#d4a23e" />
                        <stop offset="100%" stopColor="#b88528" />
                      </linearGradient>
                    </defs>

                    {/* Left petal — fans out from center after the center petal opens */}
                    <motion.path
                      d={petalPath}
                      fill="url(#petalGold)"
                      initial={{ scale: 0.4, rotate: 0, opacity: 0 }}
                      animate={{ scale: 1, rotate: -42, opacity: 1 }}
                      transition={{
                        scale: { duration: 1.0, delay: 1.5, ease: [0.16, 1, 0.3, 1] },
                        rotate: { duration: 1.0, delay: 1.5, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.5, delay: 1.5 },
                      }}
                      style={{ transformOrigin: "0px 12px" }}
                    />

                    {/* Right petal — mirrored */}
                    <motion.path
                      d={petalPath}
                      fill="url(#petalGold)"
                      initial={{ scale: 0.4, rotate: 0, opacity: 0 }}
                      animate={{ scale: 1, rotate: 42, opacity: 1 }}
                      transition={{
                        scale: { duration: 1.0, delay: 1.5, ease: [0.16, 1, 0.3, 1] },
                        rotate: { duration: 1.0, delay: 1.5, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.5, delay: 1.5 },
                      }}
                      style={{ transformOrigin: "0px 12px" }}
                    />

                    {/* Center petal — opens first, upright */}
                    <motion.path
                      d={petalPath}
                      fill="url(#petalGold)"
                      initial={{ scaleY: 0, scaleX: 0.5, opacity: 0 }}
                      animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
                      transition={{
                        duration: 1.1,
                        delay: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ transformOrigin: "0px 12px" }}
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stage B: Full JSV logo (flower + wordmark) fades in once bloom completes */}
            <AnimatePresence>
              {showLogo && (
                <motion.img
                  key="logo"
                  src={jsvLogo}
                  alt="JSV International LLP"
                  className="w-72 md:w-80 h-auto drop-shadow-[0_8px_30px_hsl(38_70%_40%/0.35)]"
                  initial={{ opacity: 0, scale: 0.92, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </AnimatePresence>

            {/* Tagline */}
            <AnimatePresence>
              {showLogo && (
                <motion.p
                  className="font-heading text-base md:text-xl text-[hsl(22_55%_18%)] italic tracking-wide mt-6 text-center max-w-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  From Mithila's Lotus Ponds — Refined for the World
                </motion.p>
              )}
            </AnimatePresence>

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
