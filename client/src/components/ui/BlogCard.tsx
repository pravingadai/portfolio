import Card3D from "./Card3D";

interface BlogCardProps {
  title: string;
  date: string;
  summary: string;
  category: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

export default function BlogCard({
  title,
  date,
  summary,
  category,
  icon,
  gradientFrom,
  gradientTo
}: BlogCardProps) {
  return (
    <Card3D>
      <div className="overflow-hidden h-48 relative">
        <div 
          className={`absolute inset-0 opacity-70 bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-white/50">
            {icon}
          </div>
        </div>
        <div className="absolute top-4 right-4 px-2 py-1 bg-primary/80 rounded-full text-xs font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{date}</p>
        <p className="text-muted-foreground text-sm mb-6">
          {summary}
        </p>
        <a href="#" className="inline-flex items-center text-primary hover:text-accent transition-colors">
          Read More 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="ml-2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </Card3D>
  );
}
