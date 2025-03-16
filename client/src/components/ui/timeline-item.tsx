import Card3D from "./card-3d";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  skills: string[];
  isLast?: boolean;
}

const TimelineItem = ({
  title,
  company,
  period,
  responsibilities,
  skills,
  isLast = false
}: TimelineItemProps) => {
  return (
    <div className={`timeline-item ${isLast ? "" : "mb-10"}`}>
      <Card3D className="p-6 bg-card dark:bg-card/80 rounded-xl shadow-neo">
        <div className="flex justify-between items-start flex-wrap">
          <div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <h4 className="font-medium text-primary dark:text-primary-foreground">{company}</h4>
          </div>
          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
            {period}
          </span>
        </div>
        
        <ul className="mt-4 space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex gap-2">
              <i className="fas fa-angle-right text-primary mt-1"></i>
              <span className="text-foreground/80">{responsibility}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-primary-foreground px-2 py-1 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>
      </Card3D>
    </div>
  );
};

export default TimelineItem;
