import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Card3D from "../ui/card-3d";
import SkillBar from "../ui/skill-bar";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    percentage: number;
  }[];
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (sectionRef.current && isInView) {
      sectionRef.current.classList.add("visible");
    }
  }, [isInView]);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "HTML & CSS", percentage: 92 },
        { name: "Redux", percentage: 80 }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", percentage: 85 },
        { name: "Express.js", percentage: 80 },
        { name: "Java", percentage: 75 },
        { name: "Python", percentage: 70 }
      ]
    },
    {
      title: "Database Technologies",
      skills: [
        { name: "MongoDB", percentage: 85 },
        { name: "MySQL", percentage: 80 },
        { name: "PgAdmin4", percentage: 70 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", percentage: 80 },
        { name: "Git", percentage: 85 },
        { name: "Linux", percentage: 75 }
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 relative page-section"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold font-poppins mb-16 text-center text-3d"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <Card3D className="p-6 bg-dark-card rounded-xl shadow-neo">
                <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <SkillBar percentage={skill.percentage} />
                    </div>
                  ))}
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
