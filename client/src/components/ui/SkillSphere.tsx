import { motion } from "framer-motion";

interface SkillSphereProps {
  icon: React.ReactNode;
  className?: string;
}

export default function SkillSphere({ icon, className = "" }: SkillSphereProps) {
  return (
    <motion.div
      className={`w-24 h-24 rounded-full bg-gradient-radial from-accent to-primary relative flex items-center justify-center shadow-lg ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="text-white text-2xl">
        {icon}
      </div>
    </motion.div>
  );
}
