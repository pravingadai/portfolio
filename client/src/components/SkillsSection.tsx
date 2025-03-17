import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { frontendSkills, backendSkills, databaseSkills, devopsSkills } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function SkillsSection() {
  const iconItems = [
    { icon: "fab fa-react", color: "text-blue-500" },
    { icon: "fab fa-node-js", color: "text-green-500" },
    { icon: "fab fa-js-square", color: "text-yellow-500" },
    { icon: "fab fa-python", color: "text-blue-600" },
    { icon: "fab fa-java", color: "text-red-500" },
    { icon: "fab fa-html5", color: "text-orange-500" },
    { icon: "fab fa-css3-alt", color: "text-blue-400" },
    { icon: "fab fa-aws", color: "text-orange-400" },
    { icon: "fab fa-git-alt", color: "text-red-600" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-muted dark:bg-muted transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="My" highlight="Skills" />
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Frontend Skills */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="card-3d mb-10 bg-background dark:bg-background p-6 rounded-2xl shadow-lg transition-colors"
              whileHover={{
                rotateY: -5,
                rotateX: 2,
                transition: { duration: 0.5 }
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <h3 className="font-poppins font-semibold text-xl mb-6 flex items-center">
                <i className="fas fa-code text-primary mr-3"></i>
                Frontend Technologies
              </h3>
              
              <div className="space-y-5">
                {frontendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Backend Skills */}
            <motion.div 
              className="card-3d bg-background dark:bg-background p-6 rounded-2xl shadow-lg transition-colors"
              whileHover={{
                rotateY: -5,
                rotateX: 2,
                transition: { duration: 0.5 }
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <h3 className="font-poppins font-semibold text-xl mb-6 flex items-center">
                <i className="fas fa-server text-secondary mr-3"></i>
                Backend Technologies
              </h3>
              
              <div className="space-y-5">
                {backendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-secondary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Database Skills */}
            <motion.div 
              className="card-3d mb-10 bg-background dark:bg-background p-6 rounded-2xl shadow-lg transition-colors"
              whileHover={{
                rotateY: 5,
                rotateX: 2,
                transition: { duration: 0.5 }
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <h3 className="font-poppins font-semibold text-xl mb-6 flex items-center">
                <i className="fas fa-database text-accent mr-3"></i>
                Database Technologies
              </h3>
              
              <div className="space-y-5">
                {databaseSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* DevOps Skills */}
            <motion.div 
              className="card-3d bg-background dark:bg-background p-6 rounded-2xl shadow-lg transition-colors"
              whileHover={{
                rotateY: 5,
                rotateX: 2,
                transition: { duration: 0.5 }
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <h3 className="font-poppins font-semibold text-xl mb-6 flex items-center">
                <i className="fas fa-tools text-primary mr-3"></i>
                DevOps & Tools
              </h3>
              
              <div className="space-y-5">
                {devopsSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Technologies Cloud */}
        <motion.div 
          className="mt-16 relative overflow-hidden py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {iconItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-background dark:bg-background p-4 rounded-full shadow-lg transition-colors"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20 
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                }}
              >
                <i className={`${item.icon} text-3xl ${item.color}`}></i>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
