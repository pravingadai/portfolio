import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Send, FileText } from "lucide-react";

export default function Hero() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/pravingadaicv.pdf";
    link.download = "Pravin_Gadai_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-between gap-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-medium">Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <GradientText>Pravin Gadai</GradientText>
          </motion.h1>

          <div className="text-2xl sm:text-3xl font-medium mb-8 text-muted-foreground h-[40px]">
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
            className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8"
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
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
              <Send className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={downloadCV}
            >
              Download CV
              <FileText className="ml-2 h-4 w-4" />
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
            className="rounded-full"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDownCircle className="h-6 w-6 text-primary" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}