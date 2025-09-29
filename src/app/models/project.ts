export interface ProjectImage {
  url: string;
  type: 'main' | 'web' | 'mobile'; // bandera para clasificar
}

export interface Project {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  technologies: string[];

  // En vez de múltiples campos, agrupamos todas las imágenes
  images: ProjectImage[];

  projectUrl?: string;
  githubUrl?: string;
  category: string;
}
