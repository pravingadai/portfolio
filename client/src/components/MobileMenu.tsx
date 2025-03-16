import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-background/95 flex flex-col justify-center items-center">
      <button 
        className="absolute top-6 right-6 p-2"
        onClick={onClose}
        aria-label="Close mobile menu"
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
          className="text-2xl"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      
      <nav>
        <ul className="flex flex-col space-y-6 text-center">
          <li>
            <a 
              href="#about" 
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={onClose}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={onClose}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={onClose}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={onClose}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#blog" 
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={onClose}
            >
              Blog
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={onClose}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
