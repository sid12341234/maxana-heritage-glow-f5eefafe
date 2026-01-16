import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const navigate = useNavigate();
  const { itemCount, setIsCartOpen } = useCart();
  const { user, signOut, isLoading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/home");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        isScrolled
          ? "bg-background/98 backdrop-blur-xl shadow-elegant py-4"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container-luxury flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-3 group">
          <span className="font-heading text-2xl md:text-3xl font-semibold tracking-[0.15em] text-foreground group-hover:text-primary transition-colors duration-300">
            MAXANA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm tracking-[0.15em] uppercase transition-all duration-300 link-underline font-medium",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-foreground text-xs font-bold rounded-full flex items-center justify-center shadow-gold"
              >
                {itemCount}
              </motion.span>
            )}
          </Button>

          {!isLoading && (
            user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="text-muted-foreground text-sm">
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" size="sm" asChild className="rounded-full">
                <Link to="/auth">Sign In</Link>
              </Button>
            )
          )}

          <Button variant="luxury" size="sm" asChild>
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-foreground text-xs font-bold rounded-full flex items-center justify-center shadow-gold"
              >
                {itemCount}
              </motion.span>
            )}
          </Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                  className={cn(
                    "text-base tracking-[0.15em] uppercase py-2 transition-colors font-medium",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              {!isLoading && (
                user ? (
                  <button
                    onClick={handleSignOut}
                    className="text-base tracking-[0.15em] uppercase py-2 transition-colors font-medium text-muted-foreground text-left flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                ) : (
                  <Link
                    to="/auth"
                    className="text-base tracking-[0.15em] uppercase py-2 transition-colors font-medium text-muted-foreground"
                  >
                    Sign In
                  </Link>
                )
              )}
              
              <Button variant="luxury" className="mt-6" asChild>
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
