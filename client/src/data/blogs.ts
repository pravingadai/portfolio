export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  category: "Web Development" | "AI/ML" | "Career";
  date: string;
  readTime: number;
  link: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Learn how to leverage TypeScript with React to build type-safe, maintainable web applications.",
    category: "Web Development",
    date: "2023-06-15",
    readTime: 8,
    link: "#"
  },
  {
    id: "2",
    title: "Getting Started with Machine Learning: A Beginner's Guide",
    excerpt: "Explore the fundamentals of machine learning and how to implement your first ML model.",
    category: "AI/ML",
    date: "2023-05-22",
    readTime: 12,
    link: "#"
  },
  {
    id: "3",
    title: "Navigating Your Tech Career: From Junior to Senior Developer",
    excerpt: "Tips and strategies for advancing your career in the tech industry and becoming a senior developer.",
    category: "Career",
    date: "2023-04-10",
    readTime: 6,
    link: "#"
  },
  {
    id: "4",
    title: "The Future of Web Development: What's Coming in 2024",
    excerpt: "Explore upcoming trends and technologies that will shape the future of web development.",
    category: "Web Development",
    date: "2023-07-05",
    readTime: 7,
    link: "#"
  },
  {
    id: "5",
    title: "Understanding Transformers in Natural Language Processing",
    excerpt: "A deep dive into transformer architecture and how it revolutionized NLP applications.",
    category: "AI/ML",
    date: "2023-08-18",
    readTime: 15,
    link: "#"
  },
  {
    id: "6",
    title: "Building a Personal Brand as a Developer",
    excerpt: "How to establish yourself as an authority in the tech industry through personal branding.",
    category: "Career",
    date: "2023-09-01",
    readTime: 5,
    link: "#"
  }
];