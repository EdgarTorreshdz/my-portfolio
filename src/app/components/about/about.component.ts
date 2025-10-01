import { Component, AfterViewInit } from '@angular/core';
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
export class AboutComponent implements AfterViewInit {
  constructor(public i18n: I18nService) {}

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    cards.forEach(card => observer.observe(card));
  }

  // Datos traducidos dinámicamente
  get aboutData() {
    return {
      title: this.t('about.title'),
      subtitle: this.t('about.subtitle'),
      description: this.t('about.description'),
      longDescription: this.t('about.longDescription'),
      education: {
        title: this.t('about.education.title'),
        items: [
          { degree: this.t('about.education.degree'), university: this.t('about.education.university'), license: this.t('about.education.license') },
          { degree: this.t('about.education.tsu'), university: this.t('about.education.university') }
        ]
      },
      experience: [
        {
          title: this.t('about.experience.hersotek.title'),
          period: this.t('about.experience.hersotek.period'),
          description: this.t('about.experience.hersotek.description'),
          technologies: ['Node', 'Angular', 'Azure', 'SQL']
        },
        {
          title: this.t('about.experience.go1.title'),
          period: this.t('about.experience.go1.period'),
          description: this.t('about.experience.go1.description'),
          technologies: ['.NET', 'Angular', 'AWS', 'SQL', 'NoSQL']
        },
        {
          title: this.t('about.experience.ultra.title'),
          period: this.t('about.experience.ultra.period'),
          description: this.t('about.experience.ultra.description'),
          technologies: ['.NET', 'VueJS', 'Nuxt', 'SQL']
        },
        {
          title: this.t('about.experience.novusred.title'),
          period: this.t('about.experience.novusred.period'),
          description: this.t('about.experience.novusred.description'),
          technologies: ['Laravel', 'PHP', 'VueJS', 'SQL', 'AWS']
        }
      ]
    };
  }

  t(key: string): string {
    return this.i18n.t(key);
  }
}
