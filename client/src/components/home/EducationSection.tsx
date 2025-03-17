
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EducationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Madan Mohan Malaviya University of Technology",
      period: "2020 - 2024",
      details: [
        "CGPA: 7.62/10",
        "Specialization in Computer Science and Engineering",
        "Key courses: Data Structures, Algorithms, Database Management, Web Development"
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CP-2023"
    },
    {
      title: "Full Stack Development",
      issuer: "NDSoftTech Solutions",
      date: "2024",
      credentialId: "FSWD-2024"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-20 relative page-section"
    >
      <div className="container mx-auto px-4 relative">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
        <motion.h2
          className="text-3xl font-bold font-poppins mb-16 text-center text-3d"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Education & <span className="text-primary">Certifications</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Education Timeline */}
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-12 relative pl-8 border-l-2 border-primary hover:border-primary/80 transition-colors duration-300 group"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-colors duration-300">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
              <p className="text-lg font-medium mt-1">{edu.institution}</p>
              <p className="text-muted-foreground mt-1">{edu.period}</p>
              <ul className="mt-3 list-disc list-inside">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-muted-foreground">{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Certifications Timeline */}
          <h3 className="text-2xl font-semibold mb-6 mt-12">Certifications</h3>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-8 relative pl-8 border-l-2 border-primary hover:border-primary/80 transition-colors duration-300 group"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors duration-300">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <h4 className="text-lg font-semibold text-primary">{cert.title}</h4>
              <p className="text-muted-foreground">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {cert.date} | Credential ID: {cert.credentialId}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
