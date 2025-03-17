
import { motion } from "framer-motion";

interface SkillBarProps {
  percentage: number;
  delay?: number;
}

const SkillBar = ({ percentage, delay = 0 }: SkillBarProps) => {
  return (
    <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ 
          duration: 1.2,
          delay,
          type: "spring",
          stiffness: 50
        }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default SkillBar;
