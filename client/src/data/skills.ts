export interface Skill {
  name: string;
  level: number;
  icon?: string;
  percentage: number;
}

export const frontendSkills: Skill[] = [
  { name: "React", level: 5, icon: "fab fa-react", percentage: 90 },
  { name: "TypeScript", level: 4, icon: "fab fa-js-square", percentage: 85 },
  { name: "HTML5", level: 5, icon: "fab fa-html5", percentage: 95 },
  { name: "CSS3/SASS", level: 4, icon: "fab fa-css3-alt", percentage: 85 },
  { name: "Next.js", level: 4, icon: "fas fa-code", percentage: 80 },
  { name: "Redux", level: 4, icon: "fas fa-layer-group", percentage: 80 }
];

export const backendSkills: Skill[] = [
  { name: "Node.js", level: 4, icon: "fab fa-node-js", percentage: 85 },
  { name: "Express", level: 4, icon: "fas fa-server", percentage: 85 },
  { name: "Java", level: 4, icon: "fab fa-java", percentage: 80 },
  { name: "Spring Boot", level: 3, icon: "fas fa-leaf", percentage: 75 },
  { name: "Python", level: 3, icon: "fab fa-python", percentage: 70 },
  { name: "RESTful APIs", level: 4, icon: "fas fa-exchange-alt", percentage: 85 }
];

export const databaseSkills: Skill[] = [
  { name: "MongoDB", level: 4, icon: "fas fa-database", percentage: 85 },
  { name: "MySQL", level: 4, icon: "fas fa-database", percentage: 80 },
  { name: "PostgreSQL", level: 3, icon: "fas fa-database", percentage: 75 },
  { name: "Redis", level: 3, icon: "fas fa-database", percentage: 70 },
  { name: "Firebase", level: 3, icon: "fas fa-fire", percentage: 75 }
];

export const devopsSkills: Skill[] = [
  { name: "AWS", level: 3, icon: "fab fa-aws", percentage: 75 },
  { name: "Docker", level: 3, icon: "fab fa-docker", percentage: 70 },
  { name: "CI/CD", level: 3, icon: "fas fa-sync", percentage: 70 },
  { name: "Git", level: 4, icon: "fab fa-git-alt", percentage: 85 },
  { name: "Linux", level: 3, icon: "fab fa-linux", percentage: 75 }
];