import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = ['Todos', 'Frontend', 'Backend', 'Fullstack', 'Mobile'];
  selectedCategory: string = 'Todos';

  constructor() { }

  ngOnInit(): void {
    console.log('Projects iniciando');

    this.loadProjects();
    this.filterProjects();
  }

  loadProjects(): void {
    this.projects = [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Una plataforma completa de comercio electrónico con carrito de compras, pasarela de pago y panel de administración.',
        technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        projectUrl: 'https://example.com/ecommerce',
        githubUrl: 'https://github.com/example/ecommerce',
        category: 'Fullstack'
      },
      {
        id: 2,
        title: 'Weather App',
        description: 'Aplicación del clima con pronósticos en tiempo real y búsqueda por ubicación.',
        technologies: ['Angular', 'OpenWeather API', 'Tailwind CSS'],
        imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        projectUrl: 'https://example.com/weather',
        githubUrl: 'https://github.com/example/weather',
        category: 'Frontend'
      },
      {
        id: 3,
        title: 'Task Management API',
        description: 'API RESTful para gestión de tareas con autenticación JWT y autorización por roles.',
        technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
        imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/example/task-api',
        category: 'Backend'
      },
      {
        id: 4,
        title: 'Fitness Tracker Mobile App',
        description: 'Aplicación móvil para seguimiento de ejercicios y progreso fitness.',
        technologies: ['Ionic', 'Angular', 'Capacitor', 'Chart.js'],
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        projectUrl: 'https://example.com/fitness',
        githubUrl: 'https://github.com/example/fitness-app',
        category: 'Mobile'
      },
      {
        id: 5,
        title: 'Portfolio Website',
        description: 'Sitio web personal para mostrar proyectos y habilidades como desarrollador.',
        technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        projectUrl: 'https://example.com',
        githubUrl: 'https://github.com/example/portfolio',
        category: 'Frontend'
      },
      {
        id: 6,
        title: 'Chat Application',
        description: 'Aplicación de chat en tiempo real con salas y mensajes privados.',
        technologies: ['Angular', 'Socket.io', 'Node.js', 'MySQL'],
        imageUrl: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        projectUrl: 'https://example.com/chat',
        githubUrl: 'https://github.com/example/chat-app',
        category: 'Fullstack'
      }
    ];
  }

  filterProjects(category: string = 'Todos'): void {
    console.log('Projects ', this.projects)
    this.selectedCategory = category;
    if (category === 'Todos') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  getTechnologiesClass(index: number): string {
    const colors = [
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-yellow-100 text-yellow-800',
      'bg-red-100 text-red-800',
      'bg-purple-100 text-purple-800'
    ];
    return colors[index % colors.length];
  }
}
