import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-dark-surface relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold font-poppins text-primary flex items-center gap-2">
              <span className="text-3d">Pravin Gadai</span>
            </Link>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6 md:mb-0">
            <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
            <a href="#experience" className="hover:text-primary transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors duration-300">Skills</a>
            <Link href="/blog" className="hover:text-primary transition-colors duration-300">Blog</Link>
            <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 bg-dark rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 bg-dark rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 bg-dark rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Pravin Gadai. All rights reserved.
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
