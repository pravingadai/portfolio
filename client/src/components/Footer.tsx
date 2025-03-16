import { Link } from "wouter";
import { ROUTES } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-background dark:bg-background py-10 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href={ROUTES.HOME} className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-lg">PG</span>
              </div>
              <span className="font-poppins font-bold text-xl">Pravin Gadai</span>
            </Link>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              &copy; {new Date().getFullYear()} Pravin Gadai. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
