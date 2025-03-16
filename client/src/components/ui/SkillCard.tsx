import { ReactNode } from "react";
import Card3D from "./Card3D";
import SkillSphere from "./SkillSphere";

interface SkillItem {
  name: string;
  percentage: number;
}

interface SkillCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  skills: SkillItem[];
  barColor: string;
}

export default function SkillCard({ title, subtitle, icon, skills, barColor }: SkillCardProps) {
  return (
    <Card3D className="p-6">
      <div className="flex items-center mb-8">
        <SkillSphere icon={icon} className="mr-6" />
        <div>
          <h3 className="text-xl font-heading font-bold">{title}</h3>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      
      <ul className="space-y-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center justify-between">
            <span>{skill.name}</span>
            <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full bg-${barColor}`}
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Card3D>
  );
}
