import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Start fade out animation after 1 second
    const timer = setTimeout(() => {
      setOpacity(0);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-dark flex justify-center items-center z-[9999]"
      style={{
        opacity,
        transition: "opacity 0.5s ease",
        visibility: opacity === 0 ? "hidden" : "visible",
      }}
    >
      <div className="w-16 h-16 rounded-full border-4 border-gray-800 border-t-primary animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;
