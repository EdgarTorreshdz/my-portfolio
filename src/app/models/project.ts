export interface Project {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  category: string;
}
