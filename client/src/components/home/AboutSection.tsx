import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Card3D from "../ui/card-3d";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (sectionRef.current && isInView) {
      sectionRef.current.classList.add("visible");
    }
  }, [isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8 
      }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="py-20 relative overflow-hidden page-section"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold font-poppins mb-16 text-center text-3d"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            className="md:w-1/2"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <Card3D className="p-6 bg-dark-card rounded-xl shadow-neo">
              <h3 className="text-xl font-bold mb-4 border-b border-primary pb-2">Professional Journey</h3>
              <p className="mb-4">
                I am a Full Stack Developer with expertise in MERN Stack, Java, and AWS solutions. My journey in 
                software development started with a strong foundation in computer science and has evolved through 
                hands-on experience with modern technologies.
              </p>
              <p className="mb-4">
                My approach to development combines technical excellence with business acumen, ensuring that 
                the solutions I build not only function flawlessly but also deliver tangible value to users 
                and stakeholders.
              </p>
              <p>
                Throughout my career, I've focused on creating scalable applications with exceptional user 
                experiences while continually learning and adopting new technologies and methodologies.
              </p>
            </Card3D>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <Card3D className="p-6 bg-dark-card rounded-xl shadow-neo">
              <h3 className="text-xl font-bold mb-4 border-b border-primary pb-2">Education & Certifications</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold">Masters in Computer Application</h4>
                <p className="text-accent">Dr. Vishwanath Karad MIT World Peace University</p>
                <p className="text-sm text-gray-400">June 2022 – July 2024 | CGPA: 7.64</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold">Bachelors in Computer Application</h4>
                <p className="text-accent">Kaveri College of Science and Commerce</p>
                <p className="text-sm text-gray-400">June 2019 - April 2022 | CGPA: 8.77</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Certifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-certificate text-yellow-500"></i>
                    AWS Solutions Architect (Associate) | 2021
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-certificate text-yellow-500"></i>
                    Java, Springboot, and Hibernate | 2023
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-certificate text-yellow-500"></i>
                    AWS Technical Accreditation | 2023
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-certificate text-yellow-500"></i>
                    AWS Cloud Practitioner | 2023
                  </li>
                </ul>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
