import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useStore } from "@/lib/store";

export default function HeroSection() {
  const { isLoading } = useStore();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  
  if (isLoading) return null;
  
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid md:grid-cols-5 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:col-span-3 space-y-6">
            <motion.div variants={itemVariants} className="inline-block">
              <div className="bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full animate-pulse">
                <span className="text-primary font-medium">Full Stack Developer</span>
              </div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight">
              Hello, I'm <br/>
              <span className="text-primary">Pravin Gadai</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              A passionate Full Stack Developer with expertise in MERN Stack, Java, and AI-powered solutions. Building innovative digital experiences that solve real-world problems.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary hover:bg-opacity-90 text-white rounded-lg transform hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              >
                <span>Get In Touch</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transform hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>View Work</span>
                <i className="fas fa-briefcase"></i>
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-6">
              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transform hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href={SOCIAL_LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transform hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href={SOCIAL_LINKS.EMAIL}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transform hover:scale-110 transition-all"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:col-span-2 flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-[float_6s_ease-in-out_infinite]">
              {/* 3D Model Placeholder */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-full bg-background dark:bg-background flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                      fill="#6C63FF"
                      d="M41.9,-56.5C53.5,-46.2,62,-33.1,67.1,-18.4C72.1,-3.7,73.7,12.7,68.2,26.8C62.8,41,50.2,53,35.6,59.3C21,65.6,4.4,66.2,-13.6,64.2C-31.7,62.2,-51.1,57.6,-63.3,45.5C-75.5,33.4,-80.4,13.8,-78.9,-5.2C-77.3,-24.2,-69.2,-42.8,-55.8,-53.5C-42.4,-64.2,-23.6,-67.1,-5.1,-61.3C13.3,-55.5,30.3,-66.9,41.9,-56.5Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <i className="fab fa-react text-xl"></i>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-4 w-14 h-14 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <i className="fab fa-node-js text-xl"></i>
              </motion.div>
              <motion.div
                className="absolute top-1/3 -right-8 w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <i className="fab fa-python text-xl"></i>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
