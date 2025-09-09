import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  ngOnInit() {
    // Verificar el modo oscuro al inicializar
    this.isDarkMode = document.documentElement.classList.contains('dark');

    // Configurar observador de secciones para actualizar navegación
    this.setupSectionObserver();
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

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.isMenuOpen = false;

    // Usar el método del componente principal para scroll
    const appComponent = (window as any).appComponent;
    if (appComponent && typeof appComponent.scrollToSection === 'function') {
      appComponent.scrollToSection(sectionId);
    } else {
      // Fallback si no está disponible
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  private setupSectionObserver() {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    // Observar cada sección
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
}
