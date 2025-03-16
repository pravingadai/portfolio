import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                            target.tagName === 'BUTTON' || 
                            target.closest('a') || 
                            target.closest('button');

      if (isInteractive) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'rgba(108, 99, 255, 0.2)';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
      } else {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'rgba(108, 99, 255, 0.3)';
        cursor.style.width = '20px';
        cursor.style.height = '20px';
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed w-5 h-5 rounded-full bg-opacity-30 bg-primary pointer-events-none z-[9999] transition-transform"
      style={{
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease, width 0.2s ease, height 0.2s ease, background-color 0.2s ease'
      }}
    ></div>
  );
};

export default CustomCursor;
