import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
}

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (sectionRef.current && isInView) {
      sectionRef.current.classList.add("visible");
    }
  }, [isInView]);

  const blogPosts: BlogPost[] = [
    {
      id: "react-performance",
      title: "Advanced React Performance Optimization Techniques",
      excerpt: "Learn how to optimize your React applications with advanced techniques like memoization, code splitting, and virtualized lists for handling large datasets.",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&h=400",
      category: "react",
      date: "May 15, 2024"
    },
    {
      id: "aws-lambda",
      title: "Mastering AWS Lambda with Node.js",
      excerpt: "Explore the powerful combination of AWS Lambda and Node.js for building scalable, cost-effective serverless applications that can handle millions of requests.",
      imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&h=400",
      category: "aws",
      date: "April 28, 2024"
    },
    {
      id: "mediapipe",
      title: "Implementing Facial Recognition with MediaPipe",
      excerpt: "A comprehensive guide to implementing real-time facial recognition and analysis using Google's MediaPipe library with Python and JavaScript integration.",
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=400",
      category: "ai",
      date: "March 10, 2024"
    }
  ];

  const filteredPosts = filter === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-20 relative page-section"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold font-poppins mb-16 text-center text-3d"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-primary">Blog</span>
        </motion.h2>

        {/* Blog categories */}
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
            All Posts
          </button>
          <button
            className={`filter-btn px-4 py-2 ${filter === "react" ? "active" : ""}`}
            onClick={() => setFilter("react")}
          >
            React
          </button>
          <button
            className={`filter-btn px-4 py-2 ${filter === "backend" ? "active" : ""}`}
            onClick={() => setFilter("backend")}
          >
            Backend
          </button>
          <button
            className={`filter-btn px-4 py-2 ${filter === "aws" ? "active" : ""}`}
            onClick={() => setFilter("aws")}
          >
            AWS
          </button>
          <button
            className={`filter-btn px-4 py-2 ${filter === "ai" ? "active" : ""}`}
            onClick={() => setFilter("ai")}
          >
            AI/ML
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="blog-card bg-dark-card rounded-xl overflow-hidden shadow-neo"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div 
                className="w-full h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              ></div>
              
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </span>
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-primary inline-flex items-center hover:text-accent transition-colors duration-300"
                >
                  Read More
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            View All Blog Posts
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
