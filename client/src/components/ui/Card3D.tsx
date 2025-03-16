import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

export default function Card3D({ children, className = "" }: Card3DProps) {
  return (
    <motion.div
      className={`bg-card rounded-xl overflow-hidden shadow-xl border border-primary/20 ${className}`}
      whileHover={{ 
        y: -5, 
        rotateX: 5, 
        rotateY: 5,
        transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="transform-style-3d backface-hidden">
        {children}
      </div>
    </motion.div>
  );
}
