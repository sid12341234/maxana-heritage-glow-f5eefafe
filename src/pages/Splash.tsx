import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setShowEnter(true), 3600);
    return () => clearTimeout(t);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => navigate("/home"), 800);
  };

  // Side petals fan out AFTER the center petal opens
  const sidePetals = [
    { rotate: -32, delay: 1.4 },
    { rotate: 32, delay: 1.4 },
  ];

  const letters = ["J", "S", "V"];

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
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background:
              "radial-gradient(ellipse at 50% 35%, hsl(48 95% 86%) 0%, hsl(45 85% 76%) 30%, hsl(38 70% 60%) 65%, hsl(22 50% 24%) 100%)",
          }}
        >
          {/* Shimmering ambient glow */}
          <motion.div
            className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(48 100% 75% / 0.55), transparent 70%)" }}
            animate={{ scale: [0.85, 1.12, 0.95], opacity: [0.4, 0.75, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center px-8">
            {/* Blooming lotus — one petal then fans into three */}
            <div className="relative w-44 h-44 mb-3">
              <svg viewBox="-100 -100 200 200" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="petalGold" x1="0" y1="-90" x2="0" y2="10" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="hsl(48 95% 72%)" />
                    <stop offset="60%" stopColor="hsl(38 80% 55%)" />
                    <stop offset="100%" stopColor="hsl(28 70% 40%)" />
                  </linearGradient>
                </defs>

                {/* Center petal — opens first */}
                <motion.path
                  d="M 0 10 C -22 -10 -22 -55 0 -85 C 22 -55 22 -10 0 10 Z"
                  fill="url(#petalGold)"
                  stroke="hsl(38 70% 45%)"
                  strokeWidth="1"
                  initial={{ scaleY: 0, scaleX: 0.4, opacity: 0 }}
                  animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "0px 10px" }}
                />

                {/* Side petals — fan out from the center */}
                {sidePetals.map((p, i) => (
                  <motion.path
                    key={i}
                    d="M 0 10 C -22 -10 -22 -55 0 -85 C 22 -55 22 -10 0 10 Z"
                    fill="url(#petalGold)"
                    stroke="hsl(38 70% 45%)"
                    strokeWidth="1"
                    initial={{ scale: 0.4, rotate: 0, opacity: 0 }}
                    animate={{ scale: 0.95, rotate: p.rotate, opacity: 1 }}
                    transition={{ duration: 1, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "0px 10px" }}
                  />
                ))}
              </svg>
            </div>

            {/* JSV — letters write in */}
            <div className="flex items-end justify-center gap-1 mb-3">
              {letters.map((ch, i) => (
                <motion.span
                  key={ch}
                  className="font-heading font-semibold leading-none text-[hsl(22_50%_15%)]"
                  style={{
                    fontSize: "clamp(3.5rem, 9vw, 6rem)",
                    textShadow: "0 2px 16px hsl(48 100% 75% / 0.6)",
                  }}
                  initial={{ opacity: 0, y: 24, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 2.5 + i * 0.18,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {ch}
                </motion.span>
              ))}
            </div>

            <motion.p
              className="text-xs md:text-sm tracking-[0.5em] uppercase font-medium text-[hsl(22_50%_22%)] mb-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 3.2 }}
            >
              International LLP
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 3.4 }}
            >
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-[hsl(22_50%_22%)]" />
              <div className="w-1.5 h-1.5 bg-[hsl(22_50%_22%)] rounded-full" />
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-[hsl(22_50%_22%)]" />
            </motion.div>

            <motion.p
              className="font-heading text-base md:text-xl text-[hsl(22_50%_18%)] italic tracking-wide mb-8 text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.6 }}
            >
              From Mithila's Lotus Ponds — Refined for the World
            </motion.p>

            <AnimatePresence>
              {showEnter && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="px-10 py-3 border border-[hsl(22_50%_22%)]/40 bg-[hsl(48_100%_85%)]/30 backdrop-blur-sm rounded-full hover:bg-[hsl(48_100%_85%)]/50 transition-colors"
                    whileHover={{ scale: 1.06 }}
                  >
                    <span className="text-xs tracking-[0.3em] uppercase text-[hsl(22_50%_18%)] font-medium">
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
