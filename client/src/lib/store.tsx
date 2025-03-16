import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { LANGUAGES } from "./constants";

type ThemeType = "light" | "dark";
type LanguageCode = "en" | "hi" | "mr";

interface StoreContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Use localStorage if available
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme-mode") as ThemeType | null;
      if (savedTheme) {
        return savedTheme;
      }
      // Fall back to system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark"; // Default fallback
  });
  
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize things on mount
  useEffect(() => {
    // Simulate initial loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // Check for saved language preference
    const savedLanguage = localStorage.getItem("language") as LanguageCode | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    
    return () => clearTimeout(timer);
  }, []);

  // Apply theme changes to document
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      
      // Remove previous theme classes
      root.classList.remove("light", "dark");
      
      // Add new theme class
      root.classList.add(theme);
      
      // Also set color-scheme for browser UI
      root.style.colorScheme = theme;
      
      // Store theme in localStorage for persistence
      localStorage.setItem("theme-mode", theme);
    }
  }, [theme]);

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <StoreContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        language,
        setLanguage,
        isLoading,
        setIsLoading,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
