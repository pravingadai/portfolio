import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/lib/store";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useStore();
  const [mounted, setMounted] = useState(false);

  // Hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      className="relative w-10 h-10 overflow-hidden flex items-center justify-center rounded-full bg-background border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 shadow-sm dark:shadow-primary/20"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          y: theme === 'dark' ? 0 : -40,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Moon className="w-5 h-5 text-primary" />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          y: theme === 'light' ? 0 : 40,
          opacity: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Sun className="w-5 h-5 text-yellow-500" />
      </motion.div>
      
      {/* Subtle glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          boxShadow: theme === 'dark' 
            ? "inset 0 0 10px rgba(124, 58, 237, 0.3)" 
            : "inset 0 0 10px rgba(245, 158, 11, 0.3)"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}