import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Card3D from "../ui/card-3d";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  skills: string[];
  demoLink: string;
  githubLink: string;
  bgGradient: string;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (sectionRef.current && isInView) {
      sectionRef.current.classList.add("visible");
    }
  }, [isInView]);

  const projects: Project[] = [
    {
      id: "rhinoplasty",
      title: "Rhinoplasty-AI-Tool (Freelance)",
      description: "AI-powered visualization tool for nose reshaping with realistic simulations of 15+ nose styles",
      imageUrl: "https://images.unsplash.com/photo-1585314062604-1a357de8b000?auto=format&fit=crop&w=800&h=400",
      category: "ai",
      skills: ["Python", "Flask", "React", "MediaPipe", "Computer Vision"],
      demoLink: "#",
      githubLink: "#",
      bgGradient: "from-purple-600 to-primary"
    },
    {
      id: "oneunion",
      title: "One Union Solutions",
      description: "Logistics management system with EOR, IOR, and Shipments tracking with advanced search and sorting capabilities",
      imageUrl: "https://images.unsplash.com/photo-1586772002130-b0f3daa6288c?auto=format&fit=crop&w=800&h=400",
      category: "mern",
      skills: ["React", "Node.js", "Express", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
      bgGradient: "from-blue-600 to-accent"
    },
    {
      id: "inquestia",
      title: "Inquestia",
      description: "Community-driven Q&A platform with user authentication, posts, upvotes/downvotes, and comment threads",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=400",
      category: "mern",
      skills: ["React", "JavaScript", "Firebase", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
      bgGradient: "from-red-600 to-yellow-500"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 relative page-section"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold font-poppins mb-16 text-center text-3d"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        {/* Project Filters */}
        <motion.div 
          className="flex justify-center mb-10 flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button 
            className={`filter-btn px-4 py-2 ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn px-4 py-2 ${filter === "mern" ? "active" : ""}`}
            onClick={() => setFilter("mern")}
          >
            MERN Stack
          </button>
          <button 
            className={`filter-btn px-4 py-2 ${filter === "ai" ? "active" : ""}`}
            onClick={() => setFilter("ai")}
          >
            AI/ML
          </button>
          <button 
            className={`filter-btn px-4 py-2 ${filter === "java" ? "active" : ""}`}
            onClick={() => setFilter("java")}
          >
            Java
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card3D className="bg-dark-card rounded-xl overflow-hidden shadow-neo">
                <div className={`h-48 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-6xl font-bold">
                    {project.category === "mern" ? "MERN" : project.category === "ai" ? "AI" : "JAVA"}
                  </div>
                  {/* We use the image URL as a CSS background to avoid direct <img> tags */}
                  <div 
                    className="w-full h-full object-cover mix-blend-overlay" 
                    style={{ backgroundImage: `url(${project.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <span key={idx} className="bg-dark bg-opacity-30 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={project.demoLink} className="text-primary hover:text-accent transition-colors duration-300">
                      <i className="fas fa-external-link-alt mr-1"></i> Demo
                    </a>
                    <a href={project.githubLink} className="text-primary hover:text-accent transition-colors duration-300">
                      <i className="fab fa-github mr-1"></i> GitHub
                    </a>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
