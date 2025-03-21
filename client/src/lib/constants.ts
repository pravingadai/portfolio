// Social media links
export const SOCIAL_LINKS = {
  LINKEDIN: "https://linkedin.com/in/",
  GITHUB: "https://github.com/",
  TWITTER: "https://twitter.com/",
  MEDIUM: "https://medium.com/",
  EMAIL: "mailto:pravingadai@hotmail.com"
};

// Contact info
export const CONTACT_INFO = {
  email: "pravingadai@hotmail.com",
  phone: "+91-7218337502",
  location: "Pune, Maharashtra, India"
};

// Routes
export const ROUTES = {
  HOME: "/",
  ABOUT: "#about",
  EXPERIENCE: "#experience",
  PROJECTS: "#projects",
  SKILLS: "#skills",
  BLOG: "/blog",
  CONTACT: "#contact",
} as const;

// Resume PDF URL
export const RESUME_PDF_URL = "/pravingadaicv.pdf";

// Navigation links
export const NAV_LINKS = [
  { href: ROUTES.ABOUT, label: "About" },
  { href: ROUTES.EXPERIENCE, label: "Experience" },
  { href: ROUTES.PROJECTS, label: "Projects" },
  { href: ROUTES.SKILLS, label: "Skills" },
  { href: ROUTES.BLOG, label: "Blog" },
  { href: ROUTES.CONTACT, label: "Contact" }
];

// Skill categories for filtering
export const SKILL_CATEGORIES = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  cloud: "Cloud & DevOps"
};

// Project categories for filtering
export const PROJECT_CATEGORIES = {
  all: "All Projects",
  mern: "MERN Stack",
  ai: "AI/ML",
  java: "Java"
};

// Blog categories for filtering
export const BLOG_CATEGORIES = {
  all: "All Posts",
  react: "React",
  backend: "Backend",
  aws: "AWS",
  ai: "AI/ML"
};

// Languages for language switcher
export const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
  { code: "mr", name: "मराठी" }
];