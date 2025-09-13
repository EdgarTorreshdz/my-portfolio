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
        title: 'Portafolio Personal',
        description: 'Mi sitio web personal desarrollado con Angular, mostrando mis proyectos, habilidades y experiencia como desarrollador fullstack.',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5', 'RxJS', 'AWS'],
        imageUrl: '/projects/portfolio.png',
        projectUrl: 'https://edgartorres.dev',
        githubUrl: 'https://github.com/EdgarTorreshdz/my-portfolio',
        category: 'Frontend',
      },
      {
        id: 2,
        title: 'PokéAPI Explorer',
        description: 'Aplicación Angular que consume la PokéAPI para explorar Pokémon, tipos, habilidades, movimientos y más. Interfaz responsive con diseño moderno.',
        technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5', 'RxJS', 'PokeAPI'],
        imageUrl: '/projects/pokeapi.png',
        projectUrl: 'https://pokeapi.edgartorres.dev',
        githubUrl: 'https://github.com/EdgarTorreshdz/pokeangular-app',
        category: 'Frontend',
      },
      {
        id: 3,
        title: 'Aplicaciones Administrativas',
        description: 'Plataforma administrativa para gestión de recursos con panel de control y reportes.',
        technologies: ['Node', 'Angular', 'SQL Server', 'Azure'],
        imageUrl: '/projects/hersotek.jpg',
        projectUrl: 'https://hersotek.com/',
        githubUrl: '#',
        category: 'Fullstack'
      },
      {
        id: 4,
        title: 'Gestión de Hoteles, cuartos',
        description: 'Aplicaciones administrativas',
        technologies: ['.NET', 'Angular', 'Blazor', 'SQL', 'AWS'],
        imageUrl: '/projects/pricetravel.png',
        projectUrl: 'https://www.pricetravel.com/',
        githubUrl: '#',
        category: 'FullStack'
      },
      {
        id: 5,
        title: 'Sistema de punto de venta',
        description: 'Sistema de punto de venta con gestión de inventario, ventas y reportes financieros.',
        technologies: ['.NET', 'VueJS', 'SQL Server'],
        imageUrl: '/projects/grupoultra.png',
        projectUrl: 'https://www.grupoultra.com/',
        githubUrl: '#',
        category: 'Fullstack'
      },
      {
        id: 6,
        title: 'Tienda Online E-commerce',
        description: 'Plataforma de e-commerce completa con carrito de compras y pasarela de pagos.',
        technologies: ['Laravel', 'PHP', 'Node', 'MySQL', 'SQL', 'AWS'],
        imageUrl: '/projects/novusred.png',
        projectUrl: 'https://novusred.mx/',
        githubUrl: '#',
        category: 'Fullstack'
      },
      {
        id: 7,
        title: 'Plataforma de venta de regalos personalizados',
        description: 'Panel administrativo, gráficas, ventas.',
        technologies: ['Laravel', 'SQL'],
        imageUrl: '/projects/rpc.png',
        projectUrl: 'http://regalos-personalizados-b12bcc15d468.herokuapp.com/',
        githubUrl: 'https://github.com/EdgarTorreshdz/regalos_personalizados_cancun',
        category: 'Backend'
      },
      {
        id: 8,
        title: 'Plataforma de reserva de botes y yates',
        description: 'Panel de control con métricas y gráficos interactivos para análisis de datos.',
        technologies: ['Laravel', 'SQL'],
        imageUrl: '/projects/boatsbooking.png',
        projectUrl: 'https://boatsbooking.com/',
        githubUrl: '#',
        category: 'Frontend'
      },
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
