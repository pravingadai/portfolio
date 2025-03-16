import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { NAV_LINKS, ROUTES } from "@/lib/constants";

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

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at calc(100% - 2rem) 2rem)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at calc(100% - 2rem) 2rem)",
      transition: {
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-background/90 dark:bg-gray-900/90 backdrop-blur-xl flex flex-col justify-center items-center"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <motion.button 
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors focus-ring rounded-full"
            onClick={onClose}
            aria-label="Close mobile menu"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <X size={24} />
          </motion.button>
          
          <nav className="w-full max-w-sm">
            <ul className="flex flex-col space-y-6 text-center px-8">
              {NAV_LINKS.map((link, index) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <a 
                    href={link.href} 
                    className="text-3xl font-bold text-foreground hover:text-primary transition-colors block py-2 relative group"
                    onClick={onClose}
                  >
                    <motion.span 
                      className="text-primary mr-2 opacity-50 inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {(index + 1).toString().padStart(2, '0')}.
                    </motion.span>
                    <span className="relative">
                      {link.label}
                      <motion.span 
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                  </a>
                </motion.li>
              ))}
              
              <motion.li variants={itemVariants}>
                <a
                  href="/pravingadaicv.pdf"
                  className="mt-8 block w-full py-3 px-6 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transform hover:scale-105 transition-all text-center"
                  onClick={onClose}
                >
                  <span className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </span>
                </a>
              </motion.li>
            </ul>
          </nav>
          
          <motion.div 
            className="absolute bottom-10 left-0 right-0 flex justify-center space-x-6"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mobile-social-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mobile-social-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mobile-social-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
