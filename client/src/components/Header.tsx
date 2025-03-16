import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/store";
import ThemeToggle from "./ThemeToggle";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Download, Menu, LayoutDashboard } from "lucide-react";

// Navigation links with information about internal/external links
const navLinks = [
  { href: ROUTES.ABOUT, label: "About", isPage: false },
  { href: ROUTES.EXPERIENCE, label: "Experience", isPage: false },
  { href: ROUTES.PROJECTS, label: "Projects", isPage: false },
  { href: ROUTES.SKILLS, label: "Skills", isPage: false },
  { href: ROUTES.BLOG, label: "Blog", isPage: true },
  { href: ROUTES.DASHBOARD, label: "Dashboard", isPage: true, icon: <LayoutDashboard className="h-4 w-4" /> },
  { href: ROUTES.CONTACT, label: "Contact", isPage: false },
];

export default function Header() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <motion.header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 dark:bg-background/80 backdrop-blur-xl shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center space-x-2 group">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center transition-all group-hover:scale-110">
              <span className="text-white font-poppins font-bold text-lg">PG</span>
            </div>
            <span className="font-poppins font-bold text-xl text-foreground">Pravin Gadai</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                >
                  {link.icon && link.icon}
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Download CV Button */}
            <motion.a
              href="/pravingadaicv.pdf"
              className="hidden md:flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download CV</span>
              <Download className="h-4 w-4" />
            </motion.a>
            
            {/* Mobile Menu Toggle */}
            <motion.button
              className="p-2 rounded-md md:hidden text-foreground hover:text-primary focus-ring"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-background dark:bg-background"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.icon && link.icon} 
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <a
                href="/pravingadaicv.pdf"
                className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Download CV</span>
                <Download className="h-4 w-4 ml-2" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
