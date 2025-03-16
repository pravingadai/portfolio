import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import ThemeToggle from "../ui/theme-toggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = "hover:text-primary transition-colors duration-300";
  const mobileNavLinkClass = "hover:text-primary py-2 transition-colors duration-300";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-dark-surface shadow-lg" 
          : "bg-opacity-70 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold font-poppins text-primary flex items-center gap-2">
          <span className="text-3d">Pravin Gadai</span>
          <div className="h-1 w-1 rounded-full bg-primary animate-pulse"></div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className={navLinkClass}>About</a>
          <a href="#experience" className={navLinkClass}>Experience</a>
          <a href="#projects" className={navLinkClass}>Projects</a>
          <a href="#skills" className={navLinkClass}>Skills</a>
          <Link href="/blog" className={navLinkClass}>Blog</Link>
          <a href="#contact" className={navLinkClass}>Contact</a>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <button 
            className="md:hidden text-2xl" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-dark-card dark:bg-dark-card p-4 absolute top-full left-0 w-full ${isMobileMenuOpen ? "" : "hidden"}`}>
        <div className="flex flex-col gap-4">
          <a href="#about" className={mobileNavLinkClass}>About</a>
          <a href="#experience" className={mobileNavLinkClass}>Experience</a>
          <a href="#projects" className={mobileNavLinkClass}>Projects</a>
          <a href="#skills" className={mobileNavLinkClass}>Skills</a>
          <Link href="/blog" className={mobileNavLinkClass}>Blog</Link>
          <a href="#contact" className={mobileNavLinkClass}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
