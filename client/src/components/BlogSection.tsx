import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { blogs } from "@/data/blogs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { useRef } from "react";

type BlogCategory = "All" | "Web Development" | "AI/ML" | "Career";

export default function BlogSection() {
  const [activeFilter, setActiveFilter] = useState<BlogCategory>("All");
  
  const filteredBlogs = blogs.filter(blog => 
    activeFilter === "All" || blog.category === activeFilter
  );
  
  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="My" 
          highlight="Blog" 
          description="Technical insights, tutorials, and thoughts on web development, AI, and technology."
        />
        
        {/* Blog Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {(["All", "Web Development", "AI/ML", "Career"] as BlogCategory[]).map((category) => (
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
        
        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
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
                          blog.category === "Web Development" ? "#6C63FF" : 
                          blog.category === "AI/ML" ? "#FF6584" : "#32D74B"
                        }
                        d="M44.5,-76.3C56.9,-69.9,65.9,-55.4,72.3,-40.5C78.7,-25.6,82.5,-10.2,79.6,3.6C76.7,17.4,67.1,29.7,57.3,41.3C47.6,53,37.7,64,25.1,69.8C12.5,75.6,-2.7,76.2,-17.1,73.2C-31.4,70.2,-44.8,63.7,-53.9,53.3C-63,42.9,-67.8,28.6,-70.3,14C-72.9,-0.7,-73.2,-15.5,-69.2,-29.2C-65.1,-42.9,-56.8,-55.4,-45,-64.7C-33.1,-74,-16.6,-80.1,0.4,-80.8C17.3,-81.5,34.7,-76.8,44.5,-76.3Z"
                        transform="translate(100 100) scale(1.1)"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <i className="far fa-calendar-alt mr-2"></i>
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <i className="far fa-clock mr-2"></i>
                    <span>{blog.readTime} min read</span>
                  </div>
                  
                  <h3 className="font-poppins font-semibold text-xl mb-3">{blog.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {blog.excerpt}
                  </p>
                  
                  <a 
                    href={blog.link} 
                    className={cn(
                      "inline-flex items-center font-medium hover:underline",
                      blog.category === "Web Development" ? "text-primary" : 
                      blog.category === "AI/ML" ? "text-secondary" : "text-accent"
                    )}
                  >
                    Read More
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
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
            View All Posts
          </motion.a>
        </div>
      </div>
    </section>
  );
}
