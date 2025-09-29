// src/app/data/projects.data.ts
import { Project } from '../models/project';

export const PROJECTS: Omit<Project, 'id'>[] = [
  
  {
    title: {
      es: 'Portafolio Personal',
      en: 'Personal Portfolio'
    },
    description: {
      es: 'Mi sitio web personal desarrollado en Angular, donde presento mis proyectos más relevantes, habilidades técnicas, experiencia profesional y medios de contacto. Incluye un diseño responsivo, soporte multilenguaje y animaciones que transmiten dinamismo, reflejando mi estilo como desarrollador fullstack.',
      en: 'My personal website built with Angular, showcasing my most relevant projects, technical skills, professional experience, and contact options. Includes a responsive design, multilingual support, and dynamic animations that reflect my style as a fullstack developer.'
    },
    technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5', 'RxJS', 'AWS'],
    images: [
      { url: '/projects/portfolio.png', type: 'main' },
      { url: '/projects/portfolio-site1.png', type: 'site' },
      { url: '/projects/portfolio-site2.png', type: 'site' },
      { url: '/projects/portfolio-site3.png', type: 'site' },
    ],
    projectUrl: 'https://edgartorres.dev',
    githubUrl: 'https://github.com/EdgarTorreshdz/my-portfolio',
    category: 'Frontend',
  },  
  {
    title: {
      es: 'Aplicaciones Administrativas',
      en: 'Administrative Applications'
    },
    description: {
      es: 'Conjunto de aplicaciones administrativas diseñadas para la gestión integral de recursos y procesos internos en empresas de gran escala. Incluyen módulos para control de usuarios, reportes dinámicos, tableros con métricas clave y funcionalidades adaptadas a la operación diaria. Optimizadas para un rendimiento ágil y seguro en la nube.',
      en: 'Set of administrative applications designed for comprehensive management of resources and internal processes in large-scale companies. Includes modules for user control, dynamic reporting, dashboards with key metrics, and features tailored to daily operations. Optimized for agile and secure cloud performance.'
    },
    technologies: ['.NET', 'Angular', 'Blazor', 'SQL', 'AWS'],
    images: [
      { url: '/projects/pricetravel.png', type: 'main' },
      { url: '/projects/pricetravel-site1.png', type: 'site' },
      { url: '/projects/pricetravel-site2.png', type: 'site' },
      { url: '/projects/pricetravel-site3.png', type: 'site' },
    ],
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
      es: 'Sistema de punto de venta robusto con gestión de inventario en tiempo real, control de ventas, generación de facturas y reportes financieros. Incluye un panel intuitivo para usuarios y un backend flexible para la administración de productos y clientes. Pensado para mejorar la eficiencia en comercios de distintos tamaños.',
      en: 'Robust point of sale system with real-time inventory management, sales control, invoicing, and financial reporting. Features an intuitive user panel and a flexible backend for managing products and clients. Designed to improve efficiency in businesses of all sizes.'
    },
    technologies: ['.NET', 'VueJS', 'SQL Server'],
    images: [
      { url: '/projects/grupoultra.png', type: 'main' },
      { url: '/projects/grupoultra-site1.png', type: 'site' },
      { url: '/projects/grupoultra-site2.png', type: 'site' },
      { url: '/projects/grupoultra-site3.png', type: 'site' },
    ],
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
      es: 'Plataforma de comercio electrónico completa que integra catálogo de productos, carrito de compras, gestión de usuarios y pasarela de pagos segura. Incluye panel administrativo para control de ventas y clientes, diseño responsivo y soporte para escalar a grandes volúmenes de tráfico.',
      en: 'Complete e-commerce platform integrating product catalog, shopping cart, user management, and secure payment gateway. Includes an admin panel for sales and customer management, responsive design, and support to scale to high traffic volumes.'
    },
    technologies: ['Laravel', 'PHP', 'Node', 'MySQL', 'SQL', 'AWS'],
    images: [
      { url: '/projects/novusred.png', type: 'main' },
      { url: '/projects/novusred-site1.png', type: 'site' },
      { url: '/projects/novusred-site2.png', type: 'site' },
      { url: '/projects/novusred-site3.png', type: 'site' },
    ],
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
      es: 'Plataforma enfocada en la venta de regalos personalizados, con un panel administrativo para la gestión de pedidos, gráficas de ventas y control de productos. Permite a los usuarios explorar opciones únicas, visualizar estadísticas y optimizar procesos de venta mediante una interfaz sencilla y eficaz.',
      en: 'Platform focused on selling personalized gifts, featuring an admin panel for managing orders, sales charts, and product control. Allows users to explore unique options, view statistics, and streamline sales processes through a simple and efficient interface.'
    },
    technologies: ['Laravel', 'SQL'],
    images: [
      { url: '/projects/rpc.png', type: 'main' },
      { url: '/projects/rpc-site1.png', type: 'site' },
      { url: '/projects/rpc-site2.png', type: 'site' },
      { url: '/projects/rpc-site3.png', type: 'site' },
    ],
    projectUrl: 'http://regalos-personalizados-b12bcc15d468.herokuapp.com/',
    githubUrl: 'https://github.com/EdgarTorreshdz/regalos_personalizados_cancun',
    category: 'Backend'
  },
  {
    title: {
      es: 'Estudio de Filmación',
      en: 'Film Studio'
    },
    description: {
      es: 'Plataforma web para un estudio de filmación profesional. Incluye secciones de servicios, portafolio multimedia, galería de proyectos destacados y un formulario de contacto para reservar grabaciones o producciones. Diseñada con un enfoque moderno, adaptable a dispositivos móviles y optimizada para SEO.',
      en: 'Web platform for a professional film studio. Features services section, multimedia portfolio, gallery of highlighted projects, and a contact form to book filming or production services. Built with a modern, mobile-friendly design and optimized for SEO.'
    },
    technologies: ['Laravel', 'Tailwind CSS', 'Heroku', 'PostgreSQL'],
    images: [
      { url: '/projects/estudio.png', type: 'main' },
      { url: '/projects/estudio1.png', type: 'site' },
      { url: '/projects/estudio2.png', type: 'site' },
      { url: '/projects/estudio3.png', type: 'site' },
    ],
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
      es: 'Sitio web corporativo para una constructora, enfocado en mostrar proyectos inmobiliarios en curso y terminados, con fichas técnicas, galerías de imágenes y secciones de servicios. Integra formularios de contacto para captar clientes y está optimizado para ofrecer una experiencia rápida y confiable.',
      en: 'Corporate website for a construction company, focused on showcasing ongoing and completed real estate projects, with technical sheets, image galleries, and services sections. Includes contact forms for client acquisition and is optimized for a fast, reliable experience.'
    },
    technologies: ['Laravel', 'Tailwind CSS', 'Heroku', 'PostgreSQL'],
    images: [
      { url: '/projects/constructora.png', type: 'main' },
      { url: '/projects/constructora-site1.png', type: 'site' },
      { url: '/projects/constructora-site2.png', type: 'site' },
      { url: '/projects/constructora-site3.png', type: 'site' },
    ],
    projectUrl: 'https://constructora.edgartorres.dev/',
    githubUrl: 'https://github.com/EdgarTorreshdz/constructora-app',
    category: 'Fullstack',
  },
  {
    title: {
      es: 'Plataforma de reserva de botes y yates',
      en: 'Boat and Yacht Booking Platform'
    },
    description: {
      es: 'Aplicación web modular que permite la gestión de productos mediante autenticación de usuarios y operaciones CRUD completas. Diseñada con arquitectura separada de frontend y backend para mejorar el mantenimiento y escalabilidad. Ideal como prueba técnica y base para aplicaciones más complejas.',
      en: 'Modular web application for product management with user authentication and full CRUD operations. Built with a separated frontend and backend architecture to improve maintenance and scalability. Ideal as a technical test and foundation for more complex applications.'
    },
    technologies: ['Laravel', 'SQL'],
    images: [
      { url: '/projects/boatsbooking.png', type: 'main' },
      { url: '/projects/boatsbooking-site1.png', type: 'site' },
      { url: '/projects/boatsbooking-site2.png', type: 'site' },
      { url: '/projects/boatsbooking-site3.png', type: 'site' },
    ],
    projectUrl: 'https://boatsbooking.com/',
    githubUrl: '#',
    category: 'Frontend'
  },
    {
    title: {
      es: 'PokéAPI Explorer',
      en: 'PokéAPI Explorer'
    },
    description: {
      es: 'Aplicación interactiva en Angular que consume la PokéAPI para explorar Pokémon, tipos, habilidades, estadísticas y movimientos. Ofrece una interfaz responsiva con filtrado dinámico, carga paginada y un diseño moderno enfocado en la experiencia del usuario.',
      en: 'Interactive Angular application that consumes the PokéAPI to explore Pokémon, types, abilities, stats, and moves. Provides a responsive interface with dynamic filtering, paginated loading, and a modern design focused on user experience.'
    },
    technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5', 'RxJS', 'PokeAPI'],
    images: [
      { url: '/projects/pokeapi.png', type: 'main' },
      { url: '/projects/pokeapi-site1.png', type: 'site' },
      { url: '/projects/pokeapi-site2.png', type: 'site' },
      { url: '/projects/pokeapi-site3.png', type: 'site' },
    ],
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
      es: 'Plataforma administrativa desarrollada para optimizar la gestión de recursos de la empresa, con panel de control, reportes en tiempo real y módulos de administración personalizados. Integrada en Azure y orientada a mejorar la eficiencia operativa.',
      en: 'Administrative platform built to optimize company resource management, featuring a control panel, real-time reporting, and custom administration modules. Integrated with Azure and focused on improving operational efficiency.'
    },
    technologies: ['Node', 'Angular', 'SQL Server', 'Azure'],
    images: [
      { url: '/projects/hersotek.jpg', type: 'main' },
      { url: '/projects/hersotek.jpg', type: 'site' }
    ],
    projectUrl: 'https://hersotek.com/',
    githubUrl: '#',
    category: 'Fullstack'
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
    images: [
      { url: '/projects/products-app.png', type: 'main' },
      { url: '/projects/products-app-site1.png', type: 'site' },
    ],
    projectUrl: 'https://products-app.edgartorres.dev/',
    githubUrl: '#',
    category: 'TechnicalTest'
  }
];
