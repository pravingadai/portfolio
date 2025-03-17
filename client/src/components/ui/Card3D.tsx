
import { useState, useRef, useCallback } from "react";
import { throttle } from "lodash";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card3D({ children, className = "" }: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    throttle((e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !isHovered) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateX = (mouseY / (rect.height / 2)) * 10;
      const rotateY = (mouseX / (rect.width / 2)) * 10;

      requestAnimationFrame(() => {
        if (cardRef.current) {
          cardRef.current.style.transform = `
            perspective(1000px) 
            rotateX(${-rotateX}deg) 
            rotateY(${rotateY}deg)
            scale3d(1.02, 1.02, 1.02)
          `;
        }
      });
    }, 16),
    [isHovered]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`bg-card rounded-xl overflow-hidden shadow-xl border border-primary/20 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.1s ease-out',
        willChange: 'transform',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
}
