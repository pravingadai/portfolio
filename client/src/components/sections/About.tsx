import { motion } from "framer-motion";
import Card3D from "@/components/ui/card-3d";
import { SectionTitle } from "@/components/ui/section-title";
import { ArrowDownCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="About Me" />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card3D className="transform-gpu hover:scale-[1.02] transition-transform duration-300">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 font-mono text-sm text-muted-foreground">about.json</div>
                </div>

                <pre className="font-mono text-sm text-muted-foreground">
{`{
  "name": "Pravin Gadai",
  "location": "Pune, Maharashtra, IN",
  "education": [
    {
      "degree": "Masters in Computer Application",
      "institution": "Dr. Vishwanath Karad MIT World Peace University",
      "year": "2022-2024",
      "cgpa": 7.64
    },
    {
      "degree": "Bachelors in Computer Application",
      "institution": "Kaveri College of Science and Commerce",
      "year": "2019-2022",
      "percentage": "85.4%"
    }
  ]
}`}
                </pre>
              </div>
            </Card3D>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary">Professional Overview</h3>
            <p className="text-lg text-muted-foreground">
              As a Full Stack Developer, I bring together technical expertise and creative problem-solving 
              to build innovative web solutions. My journey in software development is driven by a 
              passion for creating impactful digital experiences.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <ArrowDownCircle className="h-6 w-6 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}