import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'] // Mantenemos SCSS
})
export class HeroComponent {
  heroData = {
    title: 'Hola, soy',
    name: 'Tu Nombre',
    subtitle: 'Desarrollador Frontend',
    description: 'Especializado en crear experiencias web excepcionales con Angular y Tailwind CSS. Transformo ideas en realidad digital.',
    ctaButtons: [
      { text: 'Ver proyectos', href: '#projects', variant: 'primary' },
      { text: 'Contactar', href: '#contact', variant: 'secondary' }
    ],
    stats: [
      { number: '2+', label: 'Años de experiencia' },
      { number: '50+', label: 'Proyectos completados' },
      { number: '100%', label: 'Clientes satisfechos' }
    ]
  };
}
