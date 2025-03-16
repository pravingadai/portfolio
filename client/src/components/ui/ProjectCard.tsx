import React from "react";
import Card3D from "./Card3D";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string[];
  technologies: string[];
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  icon,
  gradientFrom,
  gradientTo
}: ProjectCardProps) {
  return (
    <Card3D className="h-full flex flex-col">
      <div className="overflow-hidden h-48 relative">
        <div 
          className={`absolute inset-0 opacity-90 flex items-center justify-center bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`}
        >
          <div className="text-6xl text-white/50">
            {icon}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-card/90 to-transparent">
          <h3 className="text-xl font-heading font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{subtitle}</p>
        </div>
      </div>
      
      <div className="p-6 flex-1">
        <ul className="space-y-2 text-sm text-muted-foreground mb-6">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-6 pb-6 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-primary/20 rounded text-xs font-medium text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </Card3D>
  );
}
