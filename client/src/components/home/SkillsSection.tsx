
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Card3D from "../ui/Card3D";
import SkillBar from "../ui/SkillBar";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

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
          transition={{ duration: 0.7, type: "spring" }}
        >
          Technical <span className="text-primary">Skills</span>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card3D className="p-6 bg-dark-card rounded-xl shadow-neo hover:shadow-neo-lg transition-all duration-300">
                <motion.h3 
                  className="text-xl font-bold mb-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {category.title}
                </motion.h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="skill-item"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 + skillIndex * 0.1 }}
                        >
                          {skill.percentage}%
                        </motion.span>
                      </div>
                      <SkillBar percentage={skill.percentage} delay={skillIndex * 0.1} />
                    </motion.div>
                  ))}
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
