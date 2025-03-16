import { ReactNode } from "react";
import Card3D from "./Card3D";
import { motion } from "framer-motion";

interface TimelineItemProps {
  company: string;
  role: string;
  date: string;
  children: ReactNode;
}

export default function TimelineItem({ company, role, date, children }: TimelineItemProps) {
  return (
    <div className="relative mb-16 pl-6 animate-slide-up">
      {/* Dot */}
      <motion.div 
        className="absolute left-[-25px] top-5 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_3px_rgba(110,87,224,0.2)]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Line */}
      <motion.div 
        className="absolute left-[-18px] top-[20px] bottom-[-20px] w-[1px] bg-primary"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      
      <Card3D>
        <div className="p-6">
          <h3 className="text-xl font-heading font-bold mb-2">{company}</h3>
          <h4 className="text-md font-medium text-primary mb-2">{role}</h4>
          <p className="text-sm text-muted-foreground mb-4">{date}</p>
          
          <ul className="space-y-2 text-muted-foreground">
            {children}
          </ul>
        </div>
      </Card3D>
    </div>
  );
}
