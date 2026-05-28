import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { useSound } from "@/contexts/SoundContext";
import jsvLogo from "@/assets/jsv-logo.png";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Why Makhana", path: "/why-makhana" },
  { name: "Export", path: "/export" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount, setIsCartOpen } = useCart();
  const { isMuted, toggleMute, play } = useSound();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        isScrolled
          ? "bg-background/98 backdrop-blur-xl shadow-elegant py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-luxury flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-3 group" onClick={() => play("click")}>
          <img src={jsvLogo} alt="JSV International LLP" className="h-12 md:h-14 w-auto object-contain" />
          <span className="hidden sm:inline font-heading text-base md:text-lg font-semibold tracking-[0.15em] text-foreground">
            JSV International
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => play("click")}
              className={cn(
                "text-sm tracking-[0.15em] uppercase transition-all duration-300 link-underline font-medium",
                location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => { play("click"); toggleMute(); }}
            aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full relative"
            onClick={() => { play("click"); setIsCartOpen(true); }}
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-foreground text-xs font-bold rounded-full flex items-center justify-center shadow-gold"
              >
                {itemCount}
              </motion.span>
            )}
          </Button>
          <Button variant="luxury" size="sm" asChild onClick={() => play("click")}>
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => { play("click"); toggleMute(); }}
            aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full relative"
            onClick={() => { play("click"); setIsCartOpen(true); }}
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-foreground text-xs font-bold rounded-full flex items-center justify-center shadow-gold"
              >
                {itemCount}
              </motion.span>
            )}
          </Button>
          <button
            onClick={() => { play("click"); setIsMobileMenuOpen(!isMobileMenuOpen); }}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background border-t border-border/50"
          >
            <div className="container-luxury py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => play("click")}
                  className={cn(
                    "text-base tracking-[0.15em] uppercase py-2 transition-colors font-medium",
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="luxury" className="mt-6" asChild onClick={() => play("click")}>
                <Link to="/products">Shop Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
