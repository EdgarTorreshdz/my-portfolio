import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'] // Cambiado a .css
})
export class AboutComponent implements AfterViewInit {
  aboutData = {
    title: 'Sobre Mí',
    subtitle: 'Desarrollador Frontend Apasionado',
    description: 'Soy un desarrollador frontend con más de 2 años de experiencia creando aplicaciones web modernas y responsivas. Me especializo en Angular, TypeScript y Tailwind CSS.',
    longDescription: 'Mi pasión por el desarrollo web comenzó cuando creé mi primera página web. Desde entonces, he estado constantemente aprendiendo y mejorando mis habilidades. Disfruto transformar ideas complejas en interfaces intuitivas y elegantes.',
    image: '/assets/about-me.jpg',
    stats: [
      { number: '2+', label: 'Años de experiencia' },
      { number: '50+', label: 'Proyectos completados' },
      { number: '15+', label: 'Clientes satisfechos' }
    ],
    skills: [
      { name: 'Angular', level: 90, icon: '⚡' },
      { name: 'TypeScript', level: 85, icon: '📘' },
      { name: 'JavaScript', level: 88, icon: '🟨' },
      { name: 'HTML/CSS', level: 95, icon: '🎨' },
      { name: 'Tailwind CSS', level: 92, icon: '💨' },
      { name: 'RxJS', level: 80, icon: '🔄' }
    ],
    features: [
      {
        icon: '🚀',
        title: 'Rendimiento',
        description: 'Aplicaciones optimizadas y de alto rendimiento'
      },
      {
        icon: '📱',
        title: 'Responsive',
        description: 'Diseños que se adaptan a todos los dispositivos'
      },
      {
        icon: '⚡',
        title: 'Moderno',
        description: 'Tecnologías actuales y mejores prácticas'
      }
    ]
  };

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }
}
