import { motion } from "framer-motion";
import GradientText from "../ui/GradientText";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg font-mono text-secondary mb-2">Hello, I'm</h4>
          <h1 className="text-5xl sm:text-7xl font-heading font-bold mb-6">
            <GradientText>Pravin Gadai</GradientText>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-heading font-medium mb-6 text-card-foreground">
            Full Stack Developer
          </h2>
          <p className="text-lg mb-8 max-w-lg text-muted-foreground">
            Creating seamless web experiences with MERN Stack and innovative technologies.
            Passionate about building solutions that drive real-world impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#contact" 
              className="relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-white/20 opacity-0"
                whileHover={{ 
                  opacity: 1,
                  scale: 3,
                  transition: { duration: 0.5 }
                }}
                style={{ borderRadius: "50%" }}
              />
            </motion.a>
            <motion.a 
              href="#" 
              className="bg-transparent border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.a>
          </div>
          
          <div className="flex items-center space-x-4 mt-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="mailto:pravingadai@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-80 h-80">
            {/* 3D Animated Avatar Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center rounded-full animate-spin-slow opacity-20">
              <div className="w-full h-full rounded-full border-4 border-dashed border-primary"></div>
            </div>
            
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-md animate-pulse"></div>
            
            {/* Placeholder for 3D Model */}
            <motion.div 
              className="absolute inset-8 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-6xl font-bold text-white">PG</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="border-2 border-primary rounded-full p-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
