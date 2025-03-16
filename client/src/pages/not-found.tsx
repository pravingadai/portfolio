import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full max-w-md mx-4 shadow-neo bg-dark-card">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center mb-6">
                <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
                <h1 className="text-3xl font-bold text-gray-100">404 Page Not Found</h1>
                <p className="mt-4 text-gray-400">
                  The page you are looking for doesn't exist or has been moved.
                </p>
              </div>

              <div className="flex justify-center mt-6">
                <Link 
                  to="/"
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                  Back to Home
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
