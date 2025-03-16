import { useStore } from "@/lib/store";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useStore();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.i
        className={`fas fa-sun text-yellow-500 ${theme === 'dark' ? 'hidden' : ''}`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.i
        className={`fas fa-moon text-blue-300 ${theme === 'light' ? 'hidden' : ''}`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
    </Button>
  );
}
