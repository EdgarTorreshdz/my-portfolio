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
    { name: 'GitHub', url: 'https://github.com/EdgarTorreshdz', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/edgar-antonio-torres-hernández-55942519b', icon: 'linkedin' }
  ];

  get quickLinks() {
    return [
      { label: this.t('footer.links.home'), section: 'hero' },
      { label: this.t('footer.links.about'), section: 'about' },
      { label: this.t('footer.links.projects'), section: 'projects' },
      { label: this.t('footer.links.skills'), section: 'skills' },
      { label: this.t('footer.links.contact'), section: 'contact' }
    ];
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const appComponent = (window as any).appComponent;
    if (appComponent && typeof appComponent.scrollToSection === 'function') {
      appComponent.scrollToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  t(key: string, params?: any): string {
    return this.i18n.t(key, params);
  }
}
