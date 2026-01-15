import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import lotusPond from "@/assets/lotus-pond.jpg";

const Splash = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
      if (latest > 0.8 && !isExiting) {
        handleEnter();
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, isExiting]);

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      navigate("/home");
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <div ref={containerRef} className="h-[200vh]">
          <motion.div
            className="fixed inset-0 overflow-hidden cursor-pointer"
            onClick={handleEnter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Parallax Background Layer 1 - Far */}
            <motion.div
              className="absolute inset-0 scale-110"
              style={{ y: backgroundY }}
            >
              <img
                src={heroBackground}
                alt="Luxury background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/70" />
            </motion.div>

            {/* Parallax Background Layer 2 - Mid */}
            <motion.div
              className="absolute inset-0"
              style={{ y: foregroundY, opacity }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] max-w-4xl">
                <img
                  src={lotusPond}
                  alt="Heritage"
                  className="w-full h-full object-cover rounded-[3rem] opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background rounded-[3rem]" />
              </div>
            </motion.div>

            {/* Floating Orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-gold/15 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              style={{ y: backgroundY }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-primary/15 rounded-full blur-[100px]"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              style={{ y: foregroundY }}
            />
            <motion.div
              className="absolute top-1/3 right-1/3 w-[20rem] h-[20rem] bg-gold/10 rounded-full blur-[80px]"
              animate={{
                scale: [1, 1.4, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Luxury Pattern Overlay */}
            <div className="absolute inset-0 lv-pattern opacity-40" />

            {/* Gold Dust Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Main Content - Parallax Text */}
            <motion.div
              className="relative z-10 h-screen flex flex-col items-center justify-center px-8"
              style={{ y: textY, opacity }}
            >
              {/* Top Line */}
              <motion.div
                className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold/50 to-gold" />
                <span className="text-gold/50 tracking-[0.5em] uppercase text-[10px] font-medium">
                  Maison Est. 2024
                </span>
              </motion.div>

              {/* Logo */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.h1
                  className="font-heading text-7xl md:text-9xl lg:text-[12rem] font-medium tracking-[0.3em] text-foreground mb-4"
                  initial={{ letterSpacing: "0.8em", opacity: 0 }}
                  animate={{ letterSpacing: "0.3em", opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  MAXANA
                </motion.h1>

                {/* Luxury Underline */}
                <motion.div
                  className="flex items-center justify-center gap-6 mb-8"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                >
                  <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-gold/50 to-gold" />
                  <motion.div
                    className="w-3 h-3 border border-gold/50 rotate-45"
                    animate={{ rotate: [45, 225, 45] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent via-gold/50 to-gold" />
                </motion.div>

                {/* Slogan */}
                <motion.p
                  className="font-heading text-xl md:text-3xl lg:text-4xl text-muted-foreground italic tracking-[0.15em]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 1.5 }}
                >
                  The Art of Refined Indulgence
                </motion.p>
              </motion.div>

              {/* Scroll / Click Indicator */}
              <motion.div
                className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <motion.div
                  className="px-10 py-4 border border-gold/30 rounded-full backdrop-blur-sm bg-background/20"
                  whileHover={{ scale: 1.05, borderColor: "hsl(40 70% 50%)", backgroundColor: "hsla(40, 70%, 50%, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xs md:text-sm tracking-[0.4em] uppercase text-gold/70 font-medium">
                    Scroll or Click to Enter
                  </span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  <div className="w-8 h-14 border-2 border-gold/20 rounded-full flex justify-center pt-3">
                    <motion.div
                      animate={{ y: [0, 16, 0], opacity: [1, 0.2, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1.5 h-1.5 bg-gold rounded-full shadow-gold"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Line */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent via-gold/30 to-gold/50"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
              />
            </motion.div>

            {/* Corner Frames - Luxury */}
            <motion.div
              className="absolute top-8 left-8 w-24 h-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.8 }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/40 to-transparent" />
              <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold/40 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute top-8 right-8 w-24 h-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.8 }}
            >
              <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-gold/40 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gold/40 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-8 w-24 h-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.8 }}
            >
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold/40 to-transparent" />
              <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-gold/40 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute bottom-8 right-8 w-24 h-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.8 }}
            >
              <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold/40 to-transparent" />
              <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-gold/40 to-transparent" />
            </motion.div>

            {/* Scroll Progress Indicator */}
            <motion.div
              className="fixed right-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-foreground/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              <motion.div
                className="w-full bg-gold rounded-full"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </motion.div>
          </motion.div>
        </div>
      ) : (
        <motion.div
          className="fixed inset-0 bg-background flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 2, opacity: 0, y: -100 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-heading text-7xl md:text-9xl font-medium tracking-[0.3em] text-foreground">
              MAXANA
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
