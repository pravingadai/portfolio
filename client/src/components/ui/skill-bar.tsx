import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface SkillBarProps {
  percentage: number;
}

const SkillBar = ({ percentage }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setWidth(percentage);
    }
  }, [isInView, percentage]);

  return (
    <div ref={ref} className="bg-dark-surface h-2.5 rounded-full overflow-hidden">
      <div 
        className="skill-bar h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{ 
          width: `${width}%`,
          background: "linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)"
        }}
      ></div>
    </div>
  );
};

export default SkillBar;
