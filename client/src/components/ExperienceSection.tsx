import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

const experiences = [
  {
    title: "Full Stack React Developer Trainee",
    company: "NDSoftTech Solutions",
    period: "August 2024 – November 2024",
    icon: "fas fa-briefcase",
    iconBg: "bg-primary",
    responsibilities: [
      "Assigned with the real-time project for "One Union Solutions" to maintain and add features per their requirements.",
      "Developed Estimate EOR and IOR features with business real-time calculations and added filters to sort backend data with 40% code optimization.",
      "Initialized client project "Inquestia" using MERN Stack. Developed Google Authentication along with real-time data gathering and storing, reducing development time by 20%."
    ]
  },
  {
    title: "Full Stack Developer Intern",
    company: "Kirabiz Technologies Pvt. Ltd",
    period: "December 2023 - May 2024",
    icon: "fas fa-laptop-code",
    iconBg: "bg-secondary",
    responsibilities: [
      "Developed expertise in React.js, MongoDB, Express.js, and Node.js through 120 hours of focused training, gaining strong skills in MERN Stack development.",
      "Led the integration of MERN Stack technologies, increasing system efficiency by 20% and reducing development time by 15%.",
      "Provided over 100 hours of technical support, resolving 80% of client issues, resulting in a notable improvement in system performance."
    ]
  },
  {
    title: "Java Developer Intern",
    company: "Maxgen Technologies Pvt. Ltd",
    period: "May 2023 - August 2023",
    icon: "fab fa-java",
    iconBg: "bg-accent",
    responsibilities: [
      "Designed and implemented strategic solutions to project challenges, achieving a 30% improvement in project outcomes.",
      "Created and executed database schemas using ER diagrams to ensure data integrity and efficiency.",
      "Managed Maven projects, integrating a Spring-Starter project to streamline development, cutting boilerplate code by 25% and enhancing application performance."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-muted dark:bg-muted transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Work" highlight="Experience" />
        
        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-primary transform md:translate-x-[-50%]"></div>
            
            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative z-10 mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row items-start">
                  <div className={cn(
                    "md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right",
                    index % 2 === 0 ? "order-2 md:order-1" : "order-2"
                  )}>
                    <motion.div 
                      className={cn(
                        "card-3d p-6 rounded-2xl shadow-lg bg-background dark:bg-background transition-colors"
                      )}
                      whileHover={{
                        rotateY: index % 2 === 0 ? -5 : 5,
                        rotateX: 2,
                        transition: { duration: 0.5 }
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      <h3 className="font-poppins font-semibold text-xl mb-2">{exp.title}</h3>
                      <h4 className={cn(
                        "font-medium mb-2",
                        exp.iconBg === "bg-primary" ? "text-primary" : 
                        exp.iconBg === "bg-secondary" ? "text-secondary" : "text-accent"
                      )}>{exp.company}</h4>
                      <p className="text-sm font-mono mb-4">{exp.period}</p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start">
                            <i className={cn(
                              "fas fa-check-circle mt-1 mr-2",
                              exp.iconBg === "bg-primary" ? "text-primary" : 
                              exp.iconBg === "bg-secondary" ? "text-secondary" : "text-accent"
                            )}></i>
                            <p>{resp}</p>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  
                  <div className={cn(
                    "md:w-1/2 md:pl-12 flex justify-start md:justify-start items-center",
                    index % 2 === 0 ? "order-1 md:order-2" : "order-1",
                    "mb-6 md:mb-0"
                  )}>
                    <motion.div 
                      className={`${exp.iconBg} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-20`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <i className={exp.icon}></i>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
