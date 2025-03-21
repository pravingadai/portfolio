import { useStore } from "@/lib/store";
import { LANGUAGES } from "@/lib/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as "en" | "hi" | "mr");
    localStorage.setItem("language", langCode);
    setIsDropdownOpen(false);
  };
  
  const currentLanguage = LANGUAGES.find(lang => lang.code === language);
  
  return (
    <div className="fixed bottom-8 left-8 z-40">
      <div className="bg-background dark:bg-background shadow-lg rounded-full p-2 transition-colors">
        <Button
          variant="ghost"
          onClick={toggleDropdown}
          className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          <i className="fas fa-globe text-primary"></i>
          <span>{currentLanguage?.code.toUpperCase()}</span>
          <i className={`fas fa-chevron-down text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
        </Button>
        
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-0 mb-2 bg-background dark:bg-background shadow-lg rounded-xl p-2 w-32 transition-colors"
            >
              {LANGUAGES.map(lang => (
                <Button
                  key={lang.code}
                  variant="ghost"
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ${
                    language === lang.code ? 'text-primary font-medium' : ''
                  }`}
                >
                  {lang.name}
                </Button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}