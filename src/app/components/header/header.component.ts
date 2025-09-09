import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../shared/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isDarkMode = true;
  activeSection = 'hero';
  currentLang = 'es';

  navItems = [
    { section: 'hero', label: 'Inicio' },
    { section: 'about', label: 'Sobre mí' },
    { section: 'skills', label: 'Habilidades' },
    { section: 'projects', label: 'Proyectos' },
    { section: 'contact', label: 'Contacto' }
  ];

  constructor(public i18n: I18nService) {}

  ngOnInit() {
    // Verificar el modo oscuro al inicializar
    this.isDarkMode = document.documentElement.classList.contains('dark');
    this.currentLang = this.i18n.getLang();

    // Configurar observador de secciones
    this.setupSectionObserver();


    this.i18n.langChange.subscribe((newLang) => {
      this.currentLang = newLang;
      this.updateNavItems();
    });

    // Actualizar labels de navegación según el idioma
    this.updateNavItems();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'es' ? 'en' : 'es';
    this.i18n.setLang(newLang);
  }

  private updateNavItems() {
    this.navItems = [
      { section: 'hero', label: this.t('header.home') },
      { section: 'about', label: this.t('header.about') },
      { section: 'skills', label: this.t('header.skills') },
      { section: 'projects', label: this.t('header.projects') },
      { section: 'contact', label: this.t('header.contact') }
    ];
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.isMenuOpen = false;

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

  private setupSectionObserver() {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  t(key: string): string {
    return this.i18n.t(key);
  }
}
