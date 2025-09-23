// src/app/data/projects.data.ts
import { Project } from '../models/project';

export const PROJECTS: Omit<Project, 'id'>[] = [
  {
    title: {
      es: 'Estudio de Filmación',
      en: 'Film Studio'
    },
    description: {
      es: 'Plataforma web para un estudio de filmación, que muestra sus servicios, portafolio y permite a los usuarios contactar para reservar.',
      en: 'Web platform for a film studio, showcasing its services, portfolio, and allowing users to contact for bookings.'
    },
    technologies: ['Laravel', 'Tailwind CSS', 'Heroku', 'PostgreSQL'],
    imageUrl: '/projects/estudio.png',
    projectUrl: 'https://studio.edgartorres.dev/',
    githubUrl: '',
    category: 'Fullstack',
  },
  {
    title: {
      es: 'Constructora y Desarrolladora Inmobiliaria',
      en: 'Construction and Real Estate Developer'
    },
    description: {
      es: 'Plataforma web para una constructora y desarrolladora inmobiliaria, que muestra sus proyectos, servicios y permite a los usuarios contactar a la empresa.',
      en: 'Web platform for a construction and real estate developer, showcasing its projects, services, and allowing users to contact the company.'
    },
    technologies: ['Laravel', 'Tailwind CSS', 'Heroku', 'PostgreSQL'],
    imageUrl: '/projects/constructora.png',
    projectUrl: 'https://constructora.edgartorres.dev/',
    githubUrl: 'https://github.com/EdgarTorreshdz/constructora-app',
    category: 'Fullstack',
  },
  {
    title: {
      es: 'Portafolio Personal',
      en: 'Personal Portfolio'
    },
    description: {
      es: 'Mi sitio web personal desarrollado con Angular, mostrando mis proyectos, habilidades y experiencia como desarrollador fullstack.',
      en: 'My personal website developed with Angular, showcasing my projects, skills, and experience as a fullstack developer.'
    },
    technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5', 'RxJS', 'AWS'],
    imageUrl: '/projects/portfolio.png',
    projectUrl: 'https://edgartorres.dev',
    githubUrl: 'https://github.com/EdgarTorreshdz/my-portfolio',
    category: 'Frontend',
  },
  {
    title: {
      es: 'PokéAPI Explorer',
      en: 'PokéAPI Explorer'
    },
    description: {
      es: 'Aplicación Angular que consume la PokéAPI para explorar Pokémon, tipos, habilidades, movimientos y más. Interfaz responsive con diseño moderno.',
      en: 'Angular application that consumes the PokéAPI to explore Pokémon, types, abilities, moves, and more. Responsive interface with modern design.'
    },
    technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5', 'RxJS', 'PokeAPI'],
    imageUrl: '/projects/pokeapi.png',
    projectUrl: 'https://pokeapi.edgartorres.dev',
    githubUrl: 'https://github.com/EdgarTorreshdz/pokeangular-app',
    category: 'Frontend',
  },
  {
    title: {
      es: 'Hersotek',
      en: 'Hersotek'
    },
    description: {
      es: 'Plataforma administrativa para gestión de recursos con panel de control y reportes.',
      en: 'Administrative platform for resource management with control panel and reports.'
    },
    technologies: ['Node', 'Angular', 'SQL Server', 'Azure'],
    imageUrl: '/projects/hersotek.jpg',
    projectUrl: 'https://hersotek.com/',
    githubUrl: '#',
    category: 'Fullstack'
  },
  {
    title: {
      es: 'Aplicaciones Administrativas',
      en: 'Administrative Applications'
    },
    description: {
      es: 'Aplicaciones administrativas para la gestión de recursos y procesos internos.',
      en: 'Administrative applications for resource management and internal processes.'
    },
    technologies: ['.NET', 'Angular', 'Blazor', 'SQL', 'AWS'],
    imageUrl: '/projects/pricetravel.png',
    projectUrl: 'https://www.pricetravel.com/',
    githubUrl: '#',
    category: 'FullStack'
  },
  {
    title: {
      es: 'Sistema de punto de venta',
      en: 'Point of Sale System'
    },
    description: {
      es: 'Sistema de punto de venta con gestión de inventario, ventas y reportes financieros.',
      en: 'Point of sale system with inventory management, sales, and financial reporting.'
    },
    technologies: ['.NET', 'VueJS', 'SQL Server'],
    imageUrl: '/projects/grupoultra.png',
    projectUrl: 'https://www.grupoultra.com/',
    githubUrl: '#',
    category: 'Fullstack'
  },
  {
    title: {
      es: 'Tienda Online E-commerce',
      en: 'E-commerce Online Store'
    },
    description: {
      es: 'Plataforma de e-commerce completa con carrito de compras y pasarela de pagos.',
      en: 'Complete e-commerce platform with shopping cart and payment gateway.'
    },
    technologies: ['Laravel', 'PHP', 'Node', 'MySQL', 'SQL', 'AWS'],
    imageUrl: '/projects/novusred.png',
    projectUrl: 'https://novusred.mx/',
    githubUrl: '#',
    category: 'Fullstack'
  },
  {
    title: {
      es: 'Plataforma de venta de regalos personalizados',
      en: 'Personalized Gifts Sales Platform'
    },
    description: {
      es: 'Panel administrativo, gráficas, ventas.',
      en: 'Administrative panel, charts, sales.'
    },
    technologies: ['Laravel', 'SQL'],
    imageUrl: '/projects/rpc.png',
    projectUrl: 'http://regalos-personalizados-b12bcc15d468.herokuapp.com/',
    githubUrl: 'https://github.com/EdgarTorreshdz/regalos_personalizados_cancun',
    category: 'Backend'
  },
  {
    title: {
      es: 'Plataforma de reserva de botes y yates',
      en: 'Boat and Yacht Booking Platform'
    },
    description: {
      es: 'Panel de control con métricas y gráficos interactivos para análisis de datos.',
      en: 'Control panel with metrics and interactive charts for data analysis.'
    },
    technologies: ['Laravel', 'SQL'],
    imageUrl: '/projects/boatsbooking.png',
    projectUrl: 'https://boatsbooking.com/',
    githubUrl: '#',
    category: 'Frontend'
  },
  {
    title: {
      es: 'Aplicación de Productos',
      en: 'Products App'
    },
    description: {
      es: 'Aplicación web con autenticación de usuarios y operaciones CRUD para gestión de productos. Dividida en frontend y backend para mejor mantenimiento.',
      en: 'Web application with user authentication and CRUD operations for product management. Divided into frontend and backend for better maintenance.'
    },
    technologies: ['Angular', 'SQL', 'Node'],
    imageUrl: '/projects/products-app.png',
    projectUrl: 'https://products-app.edgartorres.dev/',
    githubUrl: '#',
    category: 'TechnicalTest'
  }
];
