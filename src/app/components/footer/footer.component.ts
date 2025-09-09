import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/tuusuario',
      icon: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tuusuario',
      icon: 'linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/tuusuario',
      icon: 'twitter'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/tuusuario',
      icon: 'instagram'
    }
  ];

  quickLinks = [
    { label: 'Inicio', route: '/' },
    { label: 'Sobre mí', route: '/about' },
    { label: 'Proyectos', route: '/projects' },
    { label: 'Habilidades', route: '/skills' },
    { label: 'Contacto', route: '/contact' }
  ];

  technologies = [
    'Angular 19',
    'TypeScript',
    'Tailwind CSS',
    'RxJS',
    'HTML5/CSS3',
    'JavaScript ES6+'
  ];
}
