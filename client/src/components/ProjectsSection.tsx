import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProjectCategory = "All" | "MERN Stack" | "Java" | "AI/ML";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  
  const filteredProjects = projects.filter(project => 
    activeFilter === "All" || project.category === activeFilter
  );
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Featured" 
          highlight="Projects" 
          description="Here are some of my recent projects that showcase my skills and expertise in different technologies."
        />
        
        {/* Project Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {(["All", "MERN Stack", "Java", "AI/ML"] as ProjectCategory[]).map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className={cn(
                "px-6 py-2 rounded-full",
                activeFilter === category 
                  ? "bg-primary text-white" 
                  : "bg-background dark:bg-background hover:bg-primary hover:text-white transition-colors"
              )}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-3d bg-background dark:bg-background rounded-2xl overflow-hidden shadow-xl transition-colors"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
                whileHover={{
                  rotateY: 10,
                  rotateX: 5,
                  transition: { duration: 0.5 }
                }}
              >
                <div className="relative overflow-hidden h-52">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                    <svg viewBox="0 0 200 200" className="w-40 h-40 opacity-50">
                      <path
                        fill={
                          project.category === "MERN Stack" ? "#FF6584" : 
                          project.category === "AI/ML" ? "#6C63FF" : "#32D74B"
                        }
                        d="M30.9,-42.7C38.7,-35.1,42.9,-23.9,47.1,-11.9C51.4,0.1,55.8,12.9,51.9,22.6C48.1,32.3,36,38.9,23.6,43.5C11.1,48.1,-1.7,50.7,-12.8,47.7C-23.8,44.7,-33.1,36.2,-39.3,26.1C-45.5,16,-48.5,4.3,-45.6,-5.5C-42.7,-15.2,-33.8,-23.1,-25,-31.7C-16.1,-40.3,-7.3,-49.5,2.7,-52.7C12.8,-55.9,23.1,-50.3,30.9,-42.7Z"
                        transform="translate(100 100) scale(1.1)"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={cn(
                          "text-xs px-3 py-1 rounded-full",
                          project.category === "MERN Stack" ? "bg-secondary/10 text-secondary" : 
                          project.category === "AI/ML" ? "bg-primary/10 text-primary" : 
                          "bg-accent/10 text-accent"
                        )}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a 
                      href={project.demoLink} 
                      className={cn(
                        "hover:underline flex items-center gap-1",
                        project.category === "MERN Stack" ? "text-secondary" : 
                        project.category === "AI/ML" ? "text-primary" : "text-accent"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Demo</span>
                      <i className="fas fa-external-link-alt text-xs"></i>
                    </a>
                    <a 
                      href={project.codeLink} 
                      className={cn(
                        "hover:underline flex items-center gap-1",
                        project.category === "MERN Stack" ? "text-secondary" : 
                        project.category === "AI/ML" ? "text-primary" : "text-accent"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Source Code</span>
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-12">
          <motion.a
            href="#"
            className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
}
