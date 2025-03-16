import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add("visible");
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const downloadCV = () => {
    // Create a download link for the resume
    const link = document.createElement("a");
    link.href = "/pravingadaicv.pdf"; // Path to the resume PDF
    link.download = "Pravin_Gadai_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      ref={sectionRef} 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden pt-20 page-section"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4 text-3d">
            Hello, I'm <span className="text-primary">Pravin Gadai</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-400 font-light">Full Stack Developer</h2>
          <p className="text-lg mb-8 max-w-lg">
            Specializing in MERN Stack, Java, and AWS Solutions with a passion for creating efficient, 
            scalable applications with exceptional user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="btn px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Contact Me
            </a>
            <button 
              onClick={downloadCV}
              className="btn px-8 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Download CV
            </button>
          </div>
          
          <div className="flex gap-6 mt-10">
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              className="text-2xl hover:text-primary transition-colors duration-300" 
              aria-label="LinkedIn"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              className="text-2xl hover:text-primary transition-colors duration-300" 
              aria-label="GitHub"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="mailto:pravingadai@hotmail.com" 
              className="text-2xl hover:text-primary transition-colors duration-300" 
              aria-label="Email"
            >
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary to-accent rounded-full relative overflow-hidden shadow-2xl animate-float">
            <div className="absolute inset-4 bg-dark rounded-full flex items-center justify-center">
              <span className="text-4xl">PG</span>
            </div>
            
            {/* Orbital skill icons */}
            <div className="absolute w-full h-full" style={{ animation: 'spin 15s linear infinite' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                <i className="fab fa-react text-blue-500"></i>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                <i className="fab fa-node text-green-500"></i>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <i className="fab fa-js text-yellow-500"></i>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                <i className="fab fa-java text-red-500"></i>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
