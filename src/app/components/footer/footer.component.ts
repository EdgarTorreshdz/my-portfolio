import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../shared/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(public i18n: I18nService) {}

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

  // Quick links ahora usa scroll en lugar de rutas
  get quickLinks() {
    return [
      { label: this.t('footer.links.home'), section: 'hero' },
      { label: this.t('footer.links.about'), section: 'about' },
      { label: this.t('footer.links.projects'), section: 'projects' },
      { label: this.t('footer.links.skills'), section: 'skills' },
      { label: this.t('footer.links.contact'), section: 'contact' }
    ];
  }

  technologies = [
    'Angular 19',
    'TypeScript',
    'Tailwind CSS',
    'RxJS',
    'HTML5/CSS3',
    'JavaScript ES6+'
  ];

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();

    const appComponent = (window as any).appComponent;
    if (appComponent && typeof appComponent.scrollToSection === 'function') {
      appComponent.scrollToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  t(key: string, params?: any): string {
    return this.i18n.t(key, params);
  }
}
