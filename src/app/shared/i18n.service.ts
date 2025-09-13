import { Injectable, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root' // 👈 hace que Angular lo registre globalmente
})
export class I18nService {
  private currentLang: 'es' | 'en' = 'es';
  public langChange = new EventEmitter<'es' | 'en'>();
  private translations: any = {
    es: {
      header: {
        logo: 'EdgarTorres',
        home: 'Inicio',
        about: 'Sobre mí',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto',
        toggleDark: 'Cambiar a modo oscuro',
        toggleLight: 'Cambiar a modo claro',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú'
      },
      hero: {
        title: 'Hola, soy',
        subtitle: 'Desarrollador de Software',
        description: 'Especializado en .NET, Angular, VueJS y desarrollo en AWS con más de 3 años de experiencia',
        btnProjects: 'Ver proyectos',
        btnContact: 'Contactar',
        experience: 'Años de experiencia',
        projects: 'Proyectos completados',
        clients: 'Clientes satisfechos'
      },
      contact: {
        title: 'Contacto',
        subtitle: 'Ponte en contacto conmigo',
        infoTitle: 'Información de Contacto',
        infoDescription: '¿Tienes un proyecto en mente? No dudes en contactarme. Estoy disponible para freelance y oportunidades a tiempo completo.',
        details: [
          { icon: '📧', title: 'Email', value: 'eath2497@gmail.com' },
          { icon: '📱', title: 'Teléfono', value: '+52 998 407 5027' },
          { icon: '📍', title: 'Ubicación', value: 'Cancún, Q. Roo, México' },
          { icon: '🌐', title: 'Website', value: 'edgartorres.dev' }
        ],
        socialTitle: 'Conectemos en',
        socials: [
          { name: 'GitHub', icon: '🐙', link: 'https://github.com/EdgarTorreshdz' },
          { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/in/edgar-antonio-torres-hernández-55942519b' }
        ],
        form: {
          name: 'Nombre completo',
          namePlaceholder: 'Tu nombre completo',
          email: 'Correo electrónico',
          emailPlaceholder: 'tu.correo@ejemplo.com',
          subject: 'Asunto',
          subjectPlaceholder: 'Asunto del mensaje',
          message: 'Mensaje',
          messagePlaceholder: 'Escribe tu mensaje aquí...',
          send: 'Enviar mensaje',
          sending: 'Enviando...',
          success: '¡Mensaje enviado con éxito! Te responderé pronto.',
          error: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
        }
      },
      projects: {
        title: 'Mis Proyectos',
        description: 'Explora algunos de mis trabajos recientes. Especializado en aplicaciones administrativas, microservicios y soluciones full-stack.',
        categories: {
          todos: 'Todos',
          frontend: 'Frontend',
          backend: 'Backend',
          fullstack: 'Fullstack',
          microservices: 'Microservicios',
          aws: 'AWS'
        },
        code: 'Código',
        demo: 'Ver Demo',
        emptyTitle: 'No hay proyectos en esta categoría',
        emptyDescription: 'Prueba seleccionando otra categoría para ver más proyectos.'
      },
      skills: {
        title: 'Mis Habilidades',
        technical: 'Habilidades Técnicas',
        soft: 'Habilidades Blandas',
        languages: 'Lenguajes',
        frameworks: 'Frameworks',
        databases: 'Bases de Datos',
        cloud: 'Cloud & DevOps',
        tools: 'Herramientas',
        teamwork: 'Trabajo en equipo',
        problemSolving: 'Resolución de problemas',
        communication: 'Comunicación',
        timeManagement: 'Gestión de tiempo',
        creativity: 'Creatividad',
        agile: 'Metodologías Ágiles'
      },
      about: {
        title: 'Sobre Mí',
        subtitle: 'Desarrollador de Software Full-Stack',
        description: 'Soy un desarrollador con más de 3 años de experiencia en .NET, Angular, VueJS, Laravel y AWS. Especializado en la creación de microservicios, aplicaciones administrativas y soluciones full-stack.',
        longDescription: 'Mi pasión por el desarrollo de software comenzó cuando creé mi primera aplicación. Desde entonces, he estado constantemente aprendiendo y mejorando mis habilidades. Disfruto transformando ideas complejas en soluciones escalables y eficientes.',
        storyTitle: 'Mi Experiencia Profesional',
        passionStatement: 'Me encanta trabajar en proyectos desafiantes que me permitan crecer profesionalmente y aportar valor a través de soluciones innovadoras.',
        stats: {
          experience: 'Años de experiencia',
          projects: 'Proyectos completados',
          clients: 'Clientes satisfechos',
          technologies: 'Tecnologías dominadas'
        },
        experience: {
          hersotek: {
            title: 'Full Stack Developer - Hersotek',
            period: 'Marzo 2024 - Presente',
            description: 'Development of administrative applications using .NET, Angular, AWS, SQL and NoSQL. Development and implementation of microservices.'
          },
          go1: {
            title: '.NET Developer - Go1 Technologies/PriceTravel',
            period: 'Agosto 2023 - Febrero 2024',
            description: 'Desarrollo de aplicaciones administrativas usando .NET, Angular, AWS, SQL y NoSQL. Desarrollo e implementación de microservicios.'
          },
          ultra: {
            title: '.NET Jr Developer - Grupo Ultra',
            period: 'Junio 2022 - Julio 2023',
            description: 'Desarrollo de aplicaciones y sistemas punto de venta usando .NET, Nuxt, VueJS y SQL.'
          },
          novusred: {
            title: 'Fullstack Developer - Novusred',
            period: 'Noviembre 2021 - Junio 2022',
            description: 'Desarrollo y mantenimiento de tienda online con Laravel, PHP, VueJS, SQL y AWS.'
          },
          ozelot: {
            title: '.NET Developer Intern - Ozelot Technologies',
            period: 'Mayo 2020 - Agosto 2020',
            description: 'Desarrollo de features en .NET y VueJS.'
          }
        },
        education: {
          title: 'Educación',
          degree: 'Licenciatura en Desarrollo y Gestión de Software',
          university: 'Universidad Tecnológica de Cancún',
          license: 'Cédula Profesional: 14681724',
          tsu: 'TSU. Desarrollo de Software Multiplataforma'
        },
        languages: {
          title: 'Idiomas',
          spanish: 'Español: Nativo',
          english: 'Inglés: Intermedio - Avanzado'
        },
        features: {
          performance: {
            title: 'Rendimiento',
            description: 'Aplicaciones optimizadas y de alto rendimiento'
          },
          scalable: {
            title: 'Escalable',
            description: 'Soluciones escalables y mantenibles'
          },
          modern: {
            title: 'Moderno',
            description: 'Tecnologías actuales y mejores prácticas'
          }
        },
        cta: {
          title: '¿Te gusta lo que ves?',
          subtitle: 'Trabajemos juntos en tu próximo proyecto',
          contact: 'Contactar',
          viewProjects: 'Ver Proyectos'
        }
      },
      footer: {
        brand: {
          name: 'Edgar Torres',
          description: 'Desarrollador de Software especializado en .NET, Angular, VueJS y AWS con más de 3 años de experiencia.'
        },
        links: {
          title: 'Enlaces Rápidos',
          home: 'Inicio',
          about: 'Sobre mí',
          projects: 'Proyectos',
          skills: 'Habilidades',
          contact: 'Contacto'
        },
        technologies: {
          title: 'Tecnologías'
        },
        contact: {
          title: 'Contacto',
          email: 'eath2497@gmail.com',
          phone: '+52 998 407 5027',
          location: 'Cancún, Q. Roo, México',
          website: 'edgartorres.dev'
        },
        copyright: '© {year} Edgar Torres. Todos los derechos reservados.',
        legal: {
          privacy: 'Política de Privacidad',
          terms: 'Términos de Servicio'
        }
      }
    },
    en: {
      header: {
        logo: 'EdgarTorres',
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        toggleDark: 'Switch to dark mode',
        toggleLight: 'Switch to light mode',
        openMenu: 'Open menu',
        closeMenu: 'Close menu'
      },
      hero: {
        title: 'Hi, I am',
        subtitle: 'Software Developer',
        description: 'Specialized in .NET, Angular, VueJS and AWS development with over 3 years of experience',
        btnProjects: 'View projects',
        btnContact: 'Contact',
        experience: 'Years of experience',
        projects: 'Completed projects',
        clients: 'Happy clients'
      },
      contact: {
        title: 'Contact',
        subtitle: 'Get in touch with me',
        infoTitle: 'Contact Information',
        infoDescription: 'Do you have a project in mind? Feel free to contact me. I am available for freelance and full-time opportunities.',
        details: [
          { icon: '📧', title: 'Email', value: 'eath2497@gmail.com' },
          { icon: '📱', title: 'Phone', value: '+52 998 407 5027' },
          { icon: '📍', title: 'Location', value: 'Cancun, Q. Roo, Mexico' },
          { icon: '🌐', title: 'Website', value: 'edgartorres.dev' }
        ],
        socialTitle: 'Connect with me on',
        socials: [
          { name: 'GitHub', icon: '🐙', link: 'https://github.com/EdgarTorreshdz' },
          { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/in/edgar-antonio-torres-hernández-55942519b' }
        ],
        form: {
          name: 'Full name',
          namePlaceholder: 'Your full name',
          email: 'Email',
          emailPlaceholder: 'your.email@example.com',
          subject: 'Subject',
          subjectPlaceholder: 'Message subject',
          message: 'Message',
          messagePlaceholder: 'Write your message here...',
          send: 'Send message',
          sending: 'Sending...',
          success: 'Message sent successfully! I will get back to you soon.',
          error: 'There was an error sending the message. Please try again.'
        }
      },
      projects: {
        title: 'My Projects',
        description: 'Explore some of my recent work. Specialized in administrative applications, microservices and full-stack solutions.',
        categories: {
          todos: 'All',
          frontend: 'Frontend',
          backend: 'Backend',
          fullstack: 'Fullstack',
          microservices: 'Microservices',
          aws: 'AWS'
        },
        code: 'Code',
        demo: 'View Demo',
        emptyTitle: 'No projects in this category',
        emptyDescription: 'Try selecting another category to see more projects.'
      },
      skills: {
        title: 'My Skills',
        technical: 'Technical Skills',
        soft: 'Soft Skills',
        languages: 'Languages',
        frameworks: 'Frameworks',
        databases: 'Databases',
        cloud: 'Cloud & DevOps',
        tools: 'Tools',
        teamwork: 'Teamwork',
        problemSolving: 'Problem Solving',
        communication: 'Communication',
        timeManagement: 'Time Management',
        creativity: 'Creativity',
        agile: 'Agile Methodologies'
      },
      about: {
        title: 'About Me',
        subtitle: 'Full-Stack Software Developer',
        description: 'I am a developer with over 3 years of experience in .NET, Angular, VueJS, Laravel and AWS. Specialized in creating microservices, administrative applications and full-stack solutions.',
        longDescription: 'My passion for software development began when I created my first application. Since then, I have been constantly learning and improving my skills. I enjoy transforming complex ideas into scalable and efficient solutions.',
        storyTitle: 'Professional Experience',
        passionStatement: 'I love working on challenging projects that allow me to grow professionally and add value through innovative solutions.',
        stats: {
          experience: 'Years of experience',
          projects: 'Completed projects',
          clients: 'Satisfied clients',
          technologies: 'Mastered technologies'
        },
        experience: {
          hersotek: {
            title: 'Full Stack Developer - Hersotek',
            period: 'March 2024 - Present',
            description: 'Development of administrative applications using .NET, Angular, AWS, SQL and NoSQL. Development and implementation of microservices.'
          },
          go1: {
            title: '.NET Developer - Go1 Technologies/PriceTravel',
            period: 'August 2023 - February 2024',
            description: 'Development of administrative applications using .NET, Angular, AWS, SQL and NoSQL. Development and implementation of microservices.'
          },
          ultra: {
            title: '.NET Jr Developer - Grupo Ultra',
            period: 'June 2022 - July 2023',
            description: 'Development of applications and point-of-sale systems using .NET, Nuxt, VueJS and SQL.'
          },
          novusred: {
            title: 'Fullstack Developer - Novusred',
            period: 'November 2021 - June 2022',
            description: 'Development and maintenance of online store with Laravel, PHP, VueJS, SQL and AWS.'
          },
          ozelot: {
            title: '.NET Developer Intern - Ozelot Technologies',
            period: 'May 2020 - August 2020',
            description: 'Development of features in .NET and VueJS.'
          }
        },
        education: {
          title: 'Education',
          degree: 'Bachelor\'s Degree in Software Development and Management',
          university: 'Universidad Tecnológica de Cancún',
          license: 'Professional License: 14681724',
          tsu: 'TSU. Multiplatform Software Development'
        },
        languages: {
          title: 'Languages',
          spanish: 'Spanish: Native',
          english: 'English: Intermediate - Advanced'
        },
        features: {
          performance: {
            title: 'Performance',
            description: 'Optimized and high-performance applications'
          },
          scalable: {
            title: 'Scalable',
            description: 'Scalable and maintainable solutions'
          },
          modern: {
            title: 'Modern',
            description: 'Current technologies and best practices'
          }
        },
        cta: {
          title: 'Like what you see?',
          subtitle: 'Let\'s work together on your next project',
          contact: 'Contact',
          viewProjects: 'View Projects'
        }
      },
      footer: {
        brand: {
          name: 'Edgar Torres',
          description: 'Software Developer specialized in .NET, Angular, VueJS and AWS with over 3 years of experience.'
        },
        links: {
          title: 'Quick Links',
          home: 'Home',
          about: 'About',
          projects: 'Projects',
          skills: 'Skills',
          contact: 'Contact'
        },
        technologies: {
          title: 'Technologies'
        },
        contact: {
          title: 'Contact',
          email: 'eath2497@gmail.com',
          phone: '+52 998 407 5027',
          location: 'Cancun, Q. Roo, Mexico',
          website: 'edgartorres.dev'
        },
        copyright: '© {year} Edgar Torres. All rights reserved.',
        legal: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Service'
        }
      }
    }
  };

  setLang(lang: 'es' | 'en') {
    this.currentLang = lang;
    this.langChange.emit(lang);
  }

  getLang(): 'es' | 'en' {
    return this.currentLang;
  }

  t(path: string, params?: { [key: string]: any }): any {
    const parts = path.split('.');
    let value: any = this.translations[this.currentLang];

    // Navegar a través del objeto de traducciones
    for (const part of parts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        // Si no se encuentra la ruta, devolver null
        value = null;
        break;
      }
    }

    // Si el valor final es un array, devolverlo
    if (Array.isArray(value)) {
      return value;
    }

    // Si es string y hay parámetros, reemplazar
    if (typeof value === 'string' && params) {
      return value.replace(/{(\w+)}/g, (match: string, key: string) => {
        return params[key] !== undefined ? params[key] : match;
      });
    }

    // Para otros casos, devolver el valor o array vacío si se esperaba array
    if (path.endsWith('.details') || path.includes('items') || path.includes('list')) {
      return value || [];
    }

    return value || path;
  }
}
