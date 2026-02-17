
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["Live Music", "Dance Lessons", "Menu", "Gallery", "FAQ"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className={`font-display font-bold text-2xl tracking-tighter uppercase z-50 transition-colors ${isScrolled ? "text-primary" : "text-foreground"}`}>
          Rhythm <span className="text-accent">&</span> Rails
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link} 
              href="#" 
              className={`text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors ${isScrolled ? "text-foreground" : "text-foreground/90"}`}
            >
              {link}
            </a>
          ))}
          <Button className="bg-accent hover:bg-accent/90 text-foreground font-bold uppercase tracking-wider rounded-none">
            Book Table
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu className={!isScrolled ? "text-foreground" : "text-foreground"} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
            >
              {NAV_LINKS.map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-2xl font-display uppercase text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <Button className="bg-accent text-foreground font-bold uppercase text-lg px-8 py-6 rounded-none mt-4">
                Book a Booth
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
