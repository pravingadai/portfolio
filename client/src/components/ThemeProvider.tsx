import { createContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const initialContext: ThemeContextType = {
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialContext);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme was stored in localStorage first
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }
    
    // Check system preference next
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    
    // Default to the provided defaultTheme if neither of the above is available
    return defaultTheme;
  });

  useEffect(() => {
    // Apply the theme to the document when the component mounts or theme changes
    const root = document.documentElement;
    
    // Remove previous theme classes
    root.classList.remove("light", "dark");
    
    // Add new theme class
    root.classList.add(theme);
    root.style.colorScheme = theme;
    
    // Update body classes too for components that rely on it
    const body = document.body;
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(`${theme}-theme`);
    
    // Store the theme preference
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  // Handle system theme preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    // Only update based on system preference if user hasn't explicitly set a theme
    const handleChange = () => {
      const storedTheme = localStorage.getItem(storageKey);
      if (!storedTheme) {
        setTheme(mediaQuery.matches ? "dark" : "light");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [storageKey]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
