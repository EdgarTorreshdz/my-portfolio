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
        logo: 'MiPortafolio',
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
        subtitle: 'Desarrollador Frontend',
        description: 'Especializado en crear experiencias web excepcionales...',
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
          { icon: '📧', title: 'Email', value: 'tu.email@ejemplo.com' },
          { icon: '📱', title: 'Teléfono', value: '+1 (234) 567-8901' },
          { icon: '📍', title: 'Ubicación', value: 'Ciudad, País' }
        ],
        socialTitle: 'Sígueme en',
        socials: [
          { name: 'GitHub', icon: '🐙', link: 'https://github.com/tuusuario' },
          { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/in/tuusuario' },
          { name: 'Twitter', icon: '🐦', link: 'https://twitter.com/tuusuario' },
          { name: 'Instagram', icon: '📸', link: 'https://instagram.com/tuusuario' }
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
        description: 'Explora algunos de mis trabajos recientes. Cada proyecto representa un desafío único y una oportunidad para aprender y crecer como desarrollador.',
        categories: {
          todos: 'Todos',
          frontend: 'Frontend',
          backend: 'Backend',
          fullstack: 'Fullstack',
          mobile: 'Mobile'
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
        teamwork: 'Trabajo en equipo',
        problemSolving: 'Resolución de problemas',
        communication: 'Comunicación',
        timeManagement: 'Gestión de tiempo',
        creativity: 'Creatividad'
      },
      about: {
        title: 'Sobre Mí',
        subtitle: 'Desarrollador Frontend Apasionado',
        description: 'Soy un desarrollador frontend con más de 2 años de experiencia creando aplicaciones web modernas y responsivas. Me especializo en Angular, TypeScript y Tailwind CSS.',
        longDescription: 'Mi pasión por el desarrollo web comenzó cuando creé mi primera página web. Desde entonces, he estado constantemente aprendiendo y mejorando mis habilidades. Disfruto transformar ideas complejas en interfaces intuitivas y elegantes.',
        storyTitle: 'Mi Historia',
        passionStatement: 'Me encanta trabajar en proyectos desafiantes que me permitan crecer profesionalmente y aportar valor a través de soluciones innovadoras.',
        stats: {
          experience: 'Años de experiencia',
          projects: 'Proyectos completados',
          clients: 'Clientes satisfechos'
        },
        features: {
          performance: {
            title: 'Rendimiento',
            description: 'Aplicaciones optimizadas y de alto rendimiento'
          },
          responsive: {
            title: 'Responsive',
            description: 'Diseños que se adaptan a todos los dispositivos'
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
          name: 'Mi Portafolio',
          description: 'Desarrollador Frontend especializado en crear experiencias web excepcionales con Angular y Tailwind CSS.'
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
          email: 'tu.email@ejemplo.com',
          phone: '+123 456 7890',
          location: 'Ciudad, País'
        },
        copyright: '© {year} Mi Portafolio. Todos los derechos reservados.',
        legal: {
          privacy: 'Política de Privacidad',
          terms: 'Términos de Servicio'
        }
      }
    },
    en: {
      header: {
        logo: 'MyPortfolio',
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
        subtitle: 'Frontend Developer',
        description: 'Specialized in creating exceptional web experiences...',
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
          { icon: '📧', title: 'Email', value: 'your.email@example.com' },
          { icon: '📱', title: 'Phone', value: '+1 (234) 567-8901' },
          { icon: '📍', title: 'Location', value: 'City, Country' }
        ],
        socialTitle: 'Follow me on',
        socials: [
          { name: 'GitHub', icon: '🐙', link: 'https://github.com/yourusername' },
          { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/in/yourusername' },
          { name: 'Twitter', icon: '🐦', link: 'https://twitter.com/yourusername' },
          { name: 'Instagram', icon: '📸', link: 'https://instagram.com/yourusername' }
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
        description: 'Explore some of my recent work. Each project represents a unique challenge and an opportunity to learn and grow as a developer.',
        categories: {
          todos: 'All',
          frontend: 'Frontend',
          backend: 'Backend',
          fullstack: 'Fullstack',
          mobile: 'Mobile'
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
        teamwork: 'Teamwork',
        problemSolving: 'Problem Solving',
        communication: 'Communication',
        timeManagement: 'Time Management',
        creativity: 'Creativity'
      },
      about: {
        title: 'About Me',
        subtitle: 'Passionate Frontend Developer',
        description: 'I am a frontend developer with over 2 years of experience creating modern and responsive web applications. I specialize in Angular, TypeScript and Tailwind CSS.',
        longDescription: 'My passion for web development began when I created my first website. Since then, I have been constantly learning and improving my skills. I enjoy transforming complex ideas into intuitive and elegant interfaces.',
        storyTitle: 'My Story',
        passionStatement: 'I love working on challenging projects that allow me to grow professionally and add value through innovative solutions.',
        stats: {
          experience: 'Years of experience',
          projects: 'Completed projects',
          clients: 'Satisfied clients'
        },
        features: {
          performance: {
            title: 'Performance',
            description: 'Optimized and high-performance applications'
          },
          responsive: {
            title: 'Responsive',
            description: 'Designs that adapt to all devices'
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
          name: 'My Portfolio',
          description: 'Frontend Developer specialized in creating exceptional web experiences with Angular and Tailwind CSS.'
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
          email: 'your.email@example.com',
          phone: '+123 456 7890',
          location: 'City, Country'
        },
        copyright: '© {year} My Portfolio. All rights reserved.',
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
