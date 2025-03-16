import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-14 h-8 rounded-full transition-colors",
        "bg-dark-card border border-gray-700 cursor-pointer"
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div 
        className={cn(
          "absolute top-1 w-6 h-6 rounded-full transition-transform",
          "flex items-center justify-center",
          "bg-primary text-white text-xs",
          theme === "dark" ? "left-1" : "translate-x-6"
        )}
      >
        {theme === "dark" ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
