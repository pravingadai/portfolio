import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="About" highlight="Me" />
        
        <motion.div
          className={cn(
            "card-3d rounded-2xl p-6 md:p-10 max-w-5xl mx-auto shadow-xl",
            "bg-background/70 dark:bg-background/70 backdrop-blur-lg"
          )}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          whileHover={{
            scale: 1.02,
            rotateY: 5,
            rotateX: 2,
            transition: { 
              type: "spring",
              stiffness: 400,
              damping: 10
            }
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg mb-6">
                I'm a Full Stack Developer with a passion for creating innovative and user-friendly web applications. With expertise in the MERN stack, Java, and AI technologies, I specialize in building scalable solutions that solve real-world problems.
              </p>
              
              <p className="text-lg mb-6">
                Currently completing my Masters in Computer Application at Dr. Vishwanath Karad MIT World Peace University with a focus on Software Engineering. I bring both theoretical knowledge and practical experience to every project.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-poppins font-semibold mb-2">Location</h3>
                  <p>Pune, Maharashtra, India</p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold mb-2">Email</h3>
                  <p>pravingadai@hotmail.com</p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold mb-2">Education</h3>
                  <p>Master in Computer Application</p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold mb-2">Phone</h3>
                  <p>+91-7218337502</p>
                </div>
              </div>
              
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-primary hover:bg-opacity-90 text-white rounded-lg transform hover:scale-105 transition-all shadow-lg"
              >
                Let's Talk
              </a>
            </motion.div>
            
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Education Timeline */}
              <div className="relative pl-8 border-l-2 border-primary pt-2">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-poppins font-semibold text-lg mb-1 text-foreground">Masters in Computer Application</h3>
                  <p className="text-foreground/90 dark:text-foreground/90 font-medium mb-2">Dr. Vishwanath Karad MIT World Peace University</p>
                  <p className="text-sm font-mono">2022 - 2024 | CGPA: 7.64</p>
                </motion.div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary pt-2">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="font-poppins font-semibold text-lg mb-1 text-foreground">Bachelors in Computer Application</h3>
                  <p className="text-foreground/90 dark:text-foreground/90 font-medium mb-2">Kaveri College of Science and Commerce</p>
                  <p className="text-sm font-mono">2019 - 2022 | CGPA: 8.77</p>
                </motion.div>
              </div>
              
              {/* Certifications */}
              <div className="mt-8">
                <h3 className="font-poppins font-semibold text-xl mb-4">Certifications</h3>
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fas fa-certificate text-primary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium text-foreground">AWS Solutions Architect (Associate)</p>
                      <p className="text-sm text-foreground/80 dark:text-foreground/80">Ethans Technologies | 2021</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <i className="fas fa-certificate text-primary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium text-foreground">Java, Springboot, and Hibernate</p>
                      <p className="text-sm text-foreground/80 dark:text-foreground/80">Seven Mentors | 2023</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <i className="fas fa-certificate text-primary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">AWS Technical Accreditation</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Credly Badge | 2023</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
