import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectionHeading({
  title,
  highlight,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <motion.h2
        className="text-3xl md:text-4xl font-poppins font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </motion.h2>
      
      <motion.div
        className="w-24 h-1 bg-primary mx-auto rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      {description && (
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
