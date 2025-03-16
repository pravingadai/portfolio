import SectionTitle from "../ui/SectionTitle";
import Card3D from "../ui/Card3D";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="About Me" />
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card3D>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 font-mono text-sm text-muted-foreground">about.json</div>
                </div>
                
                <pre className="font-mono text-sm text-muted-foreground">
{`{
  "name": "Pravin Gadai",
  "location": "Pune, Maharashtra, IN",
  "education": [
    {
      "degree": "Masters in Computer Application",
      "institution": "Dr. Vishwanath Karad MIT World Peace University",
      "year": "2022-2024",
      "cgpa": 7.64
    },
    {
      "degree": "Bachelors in Computer Application",
      "institution": "Kaveri College of Science and Commerce",
      "year": "2019-2022",
      "cgpa": 8.77
    }
  ],
  "certifications": [
    "AWS Solutions Architect (Associate)",
    "Java, Springboot, and Hibernate",
    "AWS Technical Accreditation",
    "AWS Cloud Practitioner"
  ]
}`}
                </pre>
              </div>
            </Card3D>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6 text-muted-foreground">
              I'm a Full Stack Developer with expertise in MERN Stack and a strong foundation in Java and AWS. I enjoy building innovative solutions that address real-world challenges.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              My journey began with a Bachelor's in Computer Application, followed by a Master's degree at MIT World Peace University. Through internships and freelance projects, I've developed a diverse skill set spanning frontend, backend, and cloud technologies.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              I'm passionate about creating seamless user experiences and optimizing system performance. My goal is to leverage technology to build solutions that make a positive impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-primary/20 rounded-lg border border-primary/30 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mr-2 text-primary"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span>MCA, MIT (CGPA: 7.64)</span>
              </div>
              <div className="px-4 py-2 bg-primary/20 rounded-lg border border-primary/30 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mr-2 text-primary"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span>BCA (CGPA: 8.77)</span>
              </div>
              <div className="px-4 py-2 bg-primary/20 rounded-lg border border-primary/30 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mr-2 text-primary"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M12 11V3" />
                  <path d="M17 8h.01" />
                  <path d="M19 8h.01" />
                  <path d="M8 19h.01" />
                  <path d="M12 19h.01" />
                  <path d="M16 19h.01" />
                </svg>
                <span>AWS Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
