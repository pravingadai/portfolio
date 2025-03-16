import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="relative p-2 rounded-full h-10 w-10 overflow-hidden focus-ring glow"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Toggle theme"
    >
      <div className="relative z-10">
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-indigo-600" />
        )}
      </div>
      
      <motion.div
        className="absolute inset-0 bg-gray-700 dark:bg-amber-100 rounded-full"
        initial={false}
        animate={{
          scale: theme === "dark" ? 0 : 1,
          opacity: theme === "dark" ? 0 : 0.1,
        }}
        transition={{ duration: 0.4, type: "spring" }}
      />
      
      <motion.div
        className="absolute inset-0 bg-indigo-100 dark:bg-gray-900 rounded-full"
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 0.1 : 0,
        }}
        transition={{ duration: 0.4, type: "spring" }}
      />
    </motion.button>
  );
}
