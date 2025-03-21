import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(!!isClickable);
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  // Hide the custom cursor on mobile devices
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  if (isMobile) return null;
  
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: position.x,
        y: position.y,
        scale: isClicking ? 0.8 : isPointer ? 1.5 : 1,
        opacity: 1,
      }}
      transition={{
        x: { type: "spring", stiffness: 500, damping: 28 },
        y: { type: "spring", stiffness: 500, damping: 28 },
        scale: { type: "spring", stiffness: 500, damping: 20 },
      }}
    >
      <div 
        className={`w-5 h-5 bg-primary bg-opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color] ${
          isPointer ? 'w-8 h-8 mix-blend-difference' : ''
        }`}
      />
    </motion.div>
  );
}
