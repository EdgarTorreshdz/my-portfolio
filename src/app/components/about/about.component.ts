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
        { number: '2+', label: this.t('about.stats.experience') },
        { number: '50+', label: this.t('about.stats.projects') },
        { number: '15+', label: this.t('about.stats.clients') }
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
          title: this.t('about.features.performance.title'),
          description: this.t('about.features.performance.description')
        },
        {
          icon: '📱',
          title: this.t('about.features.responsive.title'),
          description: this.t('about.features.responsive.description')
        },
        {
          icon: '⚡',
          title: this.t('about.features.modern.title'),
          description: this.t('about.features.modern.description')
        }
      ]
    };
  }

  t(key: string): string {
    return this.i18n.t(key);
  }
}
