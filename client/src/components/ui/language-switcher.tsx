import { useState, useEffect } from "react";

type Language = "EN" | "FR" | "ES";

const LanguageSwitcher = () => {
  const [visible, setVisible] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<Language>("EN");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setActiveLanguage(lang);
    // In a real app, this would update translations, etc.
  };

  return (
    <div 
      className={`fixed bottom-6 left-6 bg-dark-card rounded-lg shadow-lg p-2 z-50 transition-opacity duration-300 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex">
        <button 
          className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
            activeLanguage === "EN" ? "text-primary" : "hover:text-primary"
          }`}
          onClick={() => handleLanguageChange("EN")}
        >
          EN
        </button>
        <button 
          className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
            activeLanguage === "FR" ? "text-primary" : "hover:text-primary"
          }`}
          onClick={() => handleLanguageChange("FR")}
        >
          FR
        </button>
        <button 
          className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
            activeLanguage === "ES" ? "text-primary" : "hover:text-primary"
          }`}
          onClick={() => handleLanguageChange("ES")}
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
