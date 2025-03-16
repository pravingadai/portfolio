import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import ThemeToggle from "./ThemeToggle";
import GradientText from "./ui/GradientText";

interface NavbarProps {
  onMobileMenuOpen: () => void;
}

export default function Navbar({ onMobileMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "py-3 backdrop-blur-md bg-background/90" : "py-4"}
      `}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/#hero">
            <a className="text-xl font-heading font-bold">
              <GradientText>Pravin Gadai</GradientText>
            </a>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button 
              onClick={onMobileMenuOpen}
              className="md:hidden p-2"
              aria-label="Open mobile menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
