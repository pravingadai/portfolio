
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let lastX = 0;
    let lastY = 0;
    const THROTTLE_DISTANCE = 2; // Minimum pixel distance to trigger update

    const updateCursorPosition = (x: number, y: number) => {
      cursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = Math.abs(e.clientX - lastX);
      const dy = Math.abs(e.clientY - lastY);
      
      // Only update if mouse moved enough
      if (dx > THROTTLE_DISTANCE || dy > THROTTLE_DISTANCE) {
        lastX = e.clientX;
        lastY = e.clientY;
        
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        
        rafRef.current = requestAnimationFrame(() => {
          updateCursorPosition(lastX, lastY);
          
          // Check for interactive elements
          const target = e.target as HTMLElement;
          const isInteractive = 
            target.tagName === 'BUTTON' || 
            target.tagName === 'A' || 
            target.closest('button') || 
            target.closest('a') ||
            getComputedStyle(target).cursor === 'pointer';
          
          cursor.style.width = isInteractive ? '40px' : '20px';
          cursor.style.height = isInteractive ? '40px' : '20px';
          cursor.style.backgroundColor = isInteractive ? 'rgba(108, 99, 255, 0.2)' : 'rgba(108, 99, 255, 0.3)';
        });
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 rounded-full bg-primary pointer-events-none z-[9999] transition-[width,height,background-color] duration-200"
      style={{
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    />
  );
}
