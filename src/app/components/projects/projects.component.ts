import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../shared/i18n.service';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = ['Todos', 'Frontend', 'Backend', 'Fullstack', 'microservices', 'AWS'];
  selectedCategory: string = 'Todos';

  constructor(public i18n: I18nService) { }

  ngOnInit(): void {
    console.log('Projects iniciando');
    this.loadProjects();
    this.filterProjects();
  }

  loadProjects(): void {
    this.projects = [
      {
        id: 1,
        title: 'PokéAPI Explorer',
        description: 'Aplicación Angular que consume la PokéAPI para explorar Pokémon, tipos, habilidades, movimientos y más. Interfaz responsive con diseño moderno.',
        technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5', 'RxJS', 'PokeAPI'],
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        projectUrl: 'https://pokeapi.edgartorres.dev',
        githubUrl: 'https://github.com/EdgarTorreshdz/pokeangular-app',
        category: 'Frontend',
      },
      {
        id: 2,
        title: 'Sistema Administrativo',
        description: 'Plataforma administrativa para gestión de recursos con panel de control y reportes.',
        technologies: ['.NET', 'Angular', 'SQL Server', 'AWS'],
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        projectUrl: '#',
        githubUrl: '#',
        category: 'Fullstack'
      },
      {
        id: 3,
        title: 'API de Microservicios',
        description: 'Arquitectura de microservicios para aplicación empresarial con comunicación asíncrona.',
        technologies: ['.NET', 'Docker', 'RabbitMQ', 'MongoDB'],
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        githubUrl: '#',
        category: 'microservices'
      },
      {
        id: 4,
        title: 'Sistema Point of Sale',
        description: 'Sistema de punto de venta con gestión de inventario, ventas y reportes financieros.',
        technologies: ['.NET', 'VueJS', 'SQL Server', 'WPF'],
        imageUrl: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        projectUrl: '#',
        githubUrl: '#',
        category: 'Fullstack'
      },
      {
        id: 5,
        title: 'Tienda Online E-commerce',
        description: 'Plataforma de e-commerce completa con carrito de compras y pasarela de pagos.',
        technologies: ['Laravel', 'PHP', 'VueJS', 'MySQL', 'AWS'],
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        projectUrl: '#',
        githubUrl: '#',
        category: 'Fullstack'
      },
      {
        id: 6,
        title: 'Dashboard Analítico',
        description: 'Panel de control con métricas y gráficos interactivos para análisis de datos.',
        technologies: ['Angular', 'TypeScript', 'Chart.js', 'REST API'],
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        projectUrl: '#',
        githubUrl: '#',
        category: 'Frontend'
      },
      {
        id: 7,
        title: 'Servicios Cloud AWS',
        description: 'Implementación de infraestructura cloud con servicios escalables en AWS.',
        technologies: ['AWS Lambda', 'S3', 'RDS', 'CloudFront'],
        imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        githubUrl: '#',
        category: 'AWS'
      },
      {
        id: 8,
        title: 'API RESTful .NET',
        description: 'API robusta para aplicación empresarial con autenticación JWT y autorización.',
        technologies: ['.NET Core', 'Entity Framework', 'JWT', 'SQL Server'],
        imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        githubUrl: '#',
        category: 'Backend'
      },
      {
        id: 9,
        title: 'Aplicación VueJS SPA',
        description: 'Single Page Application moderna con VueJS para gestión de contenido.',
        technologies: ['VueJS', 'Vuex', 'Vue Router', 'Tailwind CSS'],
        imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        projectUrl: '#',
        githubUrl: '#',
        category: 'Frontend'
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

  t(key: string) {
    return this.i18n.t(key);
  }
}
