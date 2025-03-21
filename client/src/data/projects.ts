export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
  demoLink: string;
  codeLink: string;
}

export const projects: Project[] = [
  // Add your project data here
];