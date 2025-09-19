// src/app/data/projects.data.ts
import { Project } from '../models/project';

export const PROJECTS: Omit<Project, 'id'>[] = [
  {
    title: 'Constructora y Desarrolladora Inmobiliaria',
    description: 'Plataforma web para una constructora y desarrolladora inmobiliaria, que muestra sus proyectos, servicios y permite a los usuarios contactar a la empresa.',
    technologies: ['Laravel', 'Tailwind CSS', 'Heroku', 'PostgreSQL'],
    imageUrl: '/projects/constructora.png',
    projectUrl: 'https://constructora.edgartorres.dev/',
    githubUrl: 'https://github.com/EdgarTorreshdz/constructora-app',
    category: 'Fullstack',
  },
  {
    title: 'Portafolio Personal',
    description: 'Mi sitio web personal desarrollado con Angular, mostrando mis proyectos, habilidades y experiencia como desarrollador fullstack.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5', 'RxJS', 'AWS'],
    imageUrl: '/projects/portfolio.png',
    projectUrl: 'https://edgartorres.dev',
    githubUrl: 'https://github.com/EdgarTorreshdz/my-portfolio',
    category: 'Frontend',
  },
  {
    title: 'PokéAPI Explorer',
    description: 'Aplicación Angular que consume la PokéAPI para explorar Pokémon, tipos, habilidades, movimientos y más. Interfaz responsive con diseño moderno.',
    technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5', 'RxJS', 'PokeAPI'],
    imageUrl: '/projects/pokeapi.png',
    projectUrl: 'https://pokeapi.edgartorres.dev',
    githubUrl: 'https://github.com/EdgarTorreshdz/pokeangular-app',
    category: 'Frontend',
  },
  {
    title: 'Aplicaciones Administrativas',
    description: 'Plataforma administrativa para gestión de recursos con panel de control y reportes.',
    technologies: ['Node', 'Angular', 'SQL Server', 'Azure'],
    imageUrl: '/projects/hersotek.jpg',
    projectUrl: 'https://hersotek.com/',
    githubUrl: '#',
    category: 'Fullstack'
  },
  {
    title: 'Gestión de Hoteles, cuartos',
    description: 'Aplicaciones administrativas',
    technologies: ['.NET', 'Angular', 'Blazor', 'SQL', 'AWS'],
    imageUrl: '/projects/pricetravel.png',
    projectUrl: 'https://www.pricetravel.com/',
    githubUrl: '#',
    category: 'FullStack'
  },
  {
    title: 'Sistema de punto de venta',
    description: 'Sistema de punto de venta con gestión de inventario, ventas y reportes financieros.',
    technologies: ['.NET', 'VueJS', 'SQL Server'],
    imageUrl: '/projects/grupoultra.png',
    projectUrl: 'https://www.grupoultra.com/',
    githubUrl: '#',
    category: 'Fullstack'
  },
  {
    title: 'Tienda Online E-commerce',
    description: 'Plataforma de e-commerce completa con carrito de compras y pasarela de pagos.',
    technologies: ['Laravel', 'PHP', 'Node', 'MySQL', 'SQL', 'AWS'],
    imageUrl: '/projects/novusred.png',
    projectUrl: 'https://novusred.mx/',
    githubUrl: '#',
    category: 'Fullstack'
  },
  {
    title: 'Plataforma de venta de regalos personalizados',
    description: 'Panel administrativo, gráficas, ventas.',
    technologies: ['Laravel', 'SQL'],
    imageUrl: '/projects/rpc.png',
    projectUrl: 'http://regalos-personalizados-b12bcc15d468.herokuapp.com/',
    githubUrl: 'https://github.com/EdgarTorreshdz/regalos_personalizados_cancun',
    category: 'Backend'
  },
  {
    title: 'Plataforma de reserva de botes y yates',
    description: 'Panel de control con métricas y gráficos interactivos para análisis de datos.',
    technologies: ['Laravel', 'SQL'],
    imageUrl: '/projects/boatsbooking.png',
    projectUrl: 'https://boatsbooking.com/',
    githubUrl: '#',
    category: 'Frontend'
  },
  {
    title: 'Product-app',
    description: 'Aplicación web con autenticación de usuarios y operaciones CRUD para gestión de productos. Dividida en frontend y backend para mejor mantenimiento.',
    technologies: ['Angular', 'SQL', 'Node'],
    imageUrl: '/projects/products-app.png',
    projectUrl: 'https://products-app.edgartorres.dev/',
    githubUrl: '#',
    category: 'TechnicalTest'
  }
];
