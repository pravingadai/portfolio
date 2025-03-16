import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import { BLOG_CATEGORIES } from "@/lib/constants";
import { BlogPost } from "@/lib/types";
import { motion } from "framer-motion";

const Blog = () => {
  const [filter, setFilter] = useState("all");

  // Sample blog posts data - in a real app this would come from an API
  const blogPosts: BlogPost[] = [
    {
      id: "react-performance",
      title: "Advanced React Performance Optimization Techniques",
      excerpt: "Learn how to optimize your React applications with advanced techniques like memoization, code splitting, and virtualized lists for handling large datasets.",
      content: "Full blog post content would go here...",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&h=400",
      category: "react",
      date: "May 15, 2024",
      tags: ["React", "Performance", "Frontend"]
    },
    {
      id: "aws-lambda",
      title: "Mastering AWS Lambda with Node.js",
      excerpt: "Explore the powerful combination of AWS Lambda and Node.js for building scalable, cost-effective serverless applications that can handle millions of requests.",
      content: "Full blog post content would go here...",
      imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&h=400",
      category: "aws",
      date: "April 28, 2024",
      tags: ["AWS", "Lambda", "Serverless", "Node.js"]
    },
    {
      id: "mediapipe",
      title: "Implementing Facial Recognition with MediaPipe",
      excerpt: "A comprehensive guide to implementing real-time facial recognition and analysis using Google's MediaPipe library with Python and JavaScript integration.",
      content: "Full blog post content would go here...",
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=400",
      category: "ai",
      date: "March 10, 2024",
      tags: ["AI", "Machine Learning", "Computer Vision", "MediaPipe"]
    },
    {
      id: "express-api",
      title: "Building RESTful APIs with Express.js",
      excerpt: "A step-by-step guide to creating robust, scalable RESTful APIs using Express.js, including authentication, middleware, and error handling.",
      content: "Full blog post content would go here...",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=400",
      category: "backend",
      date: "February 15, 2024",
      tags: ["Express", "Node.js", "API", "Backend"]
    },
    {
      id: "react-hooks",
      title: "Advanced React Hooks: Beyond the Basics",
      excerpt: "Dive deep into custom hooks, context optimization, and complex state management patterns to level up your React applications.",
      content: "Full blog post content would go here...",
      imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&h=400",
      category: "react",
      date: "January 20, 2024",
      tags: ["React", "Hooks", "State Management"]
    },
    {
      id: "aws-s3",
      title: "Mastering AWS S3 for Media Storage",
      excerpt: "Learn how to efficiently store, serve, and manage media files using AWS S3, CloudFront, and other AWS services.",
      content: "Full blog post content would go here...",
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=400",
      category: "aws",
      date: "December 5, 2023",
      tags: ["AWS", "S3", "CloudFront", "Storage"]
    }
  ];

  const filteredPosts = filter === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-3d text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-primary">Blog</span>
          </motion.h1>

          <motion.p
            className="text-lg text-center mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Insights, tutorials, and thoughts on web development, AI, and cloud technologies.
          </motion.p>

          {/* Blog categories */}
          <motion.div
            className="flex justify-center mb-10 flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {Object.entries(BLOG_CATEGORIES).map(([key, label]) => (
              <button
                key={key}
                className={`filter-btn px-4 py-2 ${filter === key ? "active" : ""}`}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="blog-card bg-dark-card rounded-xl overflow-hidden shadow-neo"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div 
                  className="w-full h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${post.imageUrl})` }}
                ></div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
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
                  
                  {post.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-gray-400">#{tag}</span>
                      ))}
                    </div>
                  )}
                  
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
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
