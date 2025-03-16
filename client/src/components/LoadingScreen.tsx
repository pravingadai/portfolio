import { useEffect, useState } from "react";

interface LoadingScreenProps {
  loading: boolean;
}

export default function LoadingScreen({ loading }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!loading) {
      // Delay hiding to allow for exit animation
      const timer = setTimeout(() => {
        setVisible(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (!visible) return null;

  return (
    <div 
      className={`
        fixed top-0 left-0 w-full h-full bg-background z-[9999] 
        flex justify-center items-center
        transition-opacity duration-500 ease-in-out
        ${loading ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="w-12 h-12 border-4 border-muted border-t-primary rounded-full animate-spin" />
    </div>
  );
}
