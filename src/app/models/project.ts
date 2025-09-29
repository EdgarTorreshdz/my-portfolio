export interface ProjectImage {
  url: string;
  type: 'main' | 'site'; // bandera para clasificar
}

export interface Project {
  id: number;
  title: { [key: string]: string };
  description: { [key: string]: string };
  technologies: string[];

  // En vez de múltiples campos, agrupamos todas las imágenes
  images: ProjectImage[];

  projectUrl?: string;
  githubUrl?: string;
  category: string;
}
