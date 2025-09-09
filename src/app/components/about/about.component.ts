import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../skills/skills.component';
import { I18nService } from '../../shared/i18n.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(public i18n: I18nService) {}

  // Datos que se traducen dinámicamente
  get aboutData() {
    return {
      title: this.t('about.title'),
      subtitle: this.t('about.subtitle'),
      description: this.t('about.description'),
      longDescription: this.t('about.longDescription'),
      image: '/assets/about-me.jpg',
      stats: [
        { number: '3+', label: this.t('about.stats.experience') },
        { number: '15+', label: this.t('about.stats.projects') },
        { number: '8+', label: this.t('about.stats.clients') },
        { number: '12+', label: this.t('about.stats.technologies') }
      ],
      features: [
        {
          icon: '🚀',
          title: this.t('about.features.performance.title'),
          description: this.t('about.features.performance.description')
        },
        {
          icon: '📊',
          title: this.t('about.features.scalable.title'),
          description: this.t('about.features.scalable.description')
        },
        {
          icon: '⚡',
          title: this.t('about.features.modern.title'),
          description: this.t('about.features.modern.description')
        }
      ],
      // Experiencia profesional
      experience: [
        {
          title: this.t('about.experience.go1.title'),
          period: this.t('about.experience.go1.period'),
          description: this.t('about.experience.go1.description'),
          technologies: ['.NET', 'Angular', 'AWS', 'SQL', 'NoSQL', 'Microservicios']
        },
        {
          title: this.t('about.experience.ultra.title'),
          period: this.t('about.experience.ultra.period'),
          description: this.t('about.experience.ultra.description'),
          technologies: ['.NET', 'VueJS', 'Nuxt', 'SQL', 'Microservicios']
        },
        {
          title: this.t('about.experience.novusred.title'),
          period: this.t('about.experience.novusred.period'),
          description: this.t('about.experience.novusred.description'),
          technologies: ['Laravel', 'PHP', 'VueJS', 'SQL', 'AWS']
        },
        {
          title: this.t('about.experience.ozelot.title'),
          period: this.t('about.experience.ozelot.period'),
          description: this.t('about.experience.ozelot.description'),
          technologies: ['.NET', 'VueJS']
        }
      ],
      // Educación
      education: {
        title: this.t('about.education.title'),
        items: [
          {
            degree: this.t('about.education.degree'),
            university: this.t('about.education.university'),
            license: this.t('about.education.license')
          },
          {
            degree: this.t('about.education.tsu'),
            university: this.t('about.education.university')
          }
        ]
      },
      // Idiomas
      languages: {
        title: this.t('about.languages.title'),
        items: [
          { name: this.t('about.languages.spanish'), level: 'Nativo', levelPercent: 100 },
          { name: this.t('about.languages.english'), level: 'Intermedio - Avanzado', levelPercent: 70 }
        ]
      }
    };
  }

  t(key: string): string {
    return this.i18n.t(key);
  }
}
