import { useState, useEffect } from "react";

export const useScrollSpy = (selectors: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      const sections = selectors.map(selector => {
        const element = document.querySelector(selector);
        if (!element) return { id: selector, position: 0, height: 0 };
        
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        
        return {
          id: selector,
          position: offsetTop,
          height: rect.height
        };
      });
      
      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.position) {
          setActiveId(section.id);
          return;
        }
      }
      
      // If no section is in view, default to the first one
      if (sections.length) {
        setActiveId(sections[0].id);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectors, offset]);
  
  return activeId;
};
