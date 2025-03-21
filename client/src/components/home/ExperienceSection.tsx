import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import TimelineItem from "../ui/timeline-item";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (sectionRef.current && isInView) {
      sectionRef.current.classList.add("visible");
    }
  }, [isInView]);

  const experiences = [
    {
      title: "Full Stack React Developer Trainee",
      company: "NDSoftTech Solutions",
      period: "Aug 2024 - Nov 2024",
      responsibilities: [
        'Assigned with the real-time project for "One Union Solutions" to maintain and add features per their requirements.',
        "Developed Estimate EOR and IOR features with business real-time calculations and added filters to sort backend data with optimization in code 40%.",
        'Initialized the client project "Inquestia" using MERN Stack. Developed Google Authentication along with real-time data gathering and storing, reducing development time by up to 20%.'
      ],
      skills: ["React.js", "Node.js", "MongoDB", "Express.js"]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Kirabiz Technologies Pvt. Ltd",
      period: "Dec 2023 - May 2024",
      responsibilities: [
        "Developed expertise in React.js, MongoDB, Express.js, and Node.js through 120 hours of focused training, gaining strong skills in MERN Stack development.",
        "Led the integration of MERN Stack technologies, increasing system efficiency by 20% and reducing development time by 15%.",
        "Provided over 100 hours of technical support, resolving 80% of client issues, resulting in a notable improvement in system performance."
      ],
      skills: ["MERN Stack", "API Integration", "Technical Support"]
    },
    {
      title: "Java Developer Intern",
      company: "Maxgen Technologies Pvt. Ltd",
      period: "May 2023 - Aug 2023",
      responsibilities: [
        "Designed and implemented strategic solutions to project challenges, achieving a 30% improvement in project outcomes.",
        "Created and executed database schemas using ER diagrams to ensure data integrity and efficiency.",
        "Managed Maven projects, integrating a Spring-Starter project to streamline development, cutting boilerplate code by 25% and enhancing application performance."
      ],
      skills: ["Java", "Spring", "Maven", "Database Design"]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 relative page-section"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold font-poppins mb-16 text-center text-3d"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <TimelineItem
                title={exp.title}
                company={exp.company}
                period={exp.period}
                responsibilities={exp.responsibilities}
                skills={exp.skills}
                isLast={index === experiences.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
