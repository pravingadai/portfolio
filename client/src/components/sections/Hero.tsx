
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Send, FileText } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/pravingadaicv.pdf";
    link.download = "Pravin_Gadai_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      containerRef.current.style.setProperty('--mouse-x', `${x}`);
      containerRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,0.5)_var(--mouse-y,0.5),rgba(var(--primary-rgb),0.15)_0%,transparent_50%)] pointer-events-none" />

      <motion.div 
        ref={containerRef}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-between gap-12"
        style={{ y, opacity }}
      >
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span className="text-primary font-medium relative after:content-[''] after:absolute after:h-px after:w-full after:bottom-0 after:left-0 after:bg-primary/50 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight relative"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <GradientText className="relative z-10">Pravin Gadai</GradientText>
            <div className="absolute inset-0 blur-3xl bg-primary/20 -z-10 animate-pulse" />
          </motion.h1>

          <div className="text-2xl sm:text-3xl font-medium mb-8 text-muted-foreground h-[40px] backdrop-blur-sm">
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "MERN Stack Expert", "Problem Solver"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
              }}
            />
          </div>

          <motion.p
            className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Crafting innovative web solutions with modern technologies. 
            Specialized in building scalable applications with exceptional user experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white relative overflow-hidden group transition-transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Contact Me</span>
              <Send className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 relative overflow-hidden group transition-transform hover:scale-105"
              onClick={downloadCV}
            >
              <span className="relative z-10">Download CV</span>
              <FileText className="ml-2 h-4 w-4 relative z-10 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDownCircle className="h-6 w-6 text-primary animate-bounce" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
