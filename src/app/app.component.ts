import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LazyLoadComponent } from './components/lazy-load/lazy-load.component';
import { ActivatedRoute, Router } from '@angular/router';
import { I18nService } from './shared/i18n.service';
import { AnimationsService } from './shared/animations.service';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    LazyLoadComponent,
    LanguageSwitcherComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mi-portafolio';

  // Componentes para lazy loading
  heroComponent = HeroComponent;
  aboutComponent = AboutComponent;
  skillsComponent = SkillsComponent;
  projectsComponent = ProjectsComponent;
  contactComponent = ContactComponent;

  // Mapa para rastrear componentes cargados
  loadedComponents = new Set<string>();

  @ViewChildren(LazyLoadComponent) lazyLoadComponents!: QueryList<LazyLoadComponent>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private i18n: I18nService,
    private animationsService: AnimationsService
  ) {
    (window as any).appComponent = this;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const lang = params.get('lang') as 'es' | 'en';
      if (lang) {
        this.i18n.setLang(lang);
      } else {
        this.router.navigate(['/es']);
      }
    });

    this.setupTheme();
    this.setupSmoothScroll();
    this.animationsService.initAnimations();
  }

  // Método llamado cuando un componente se carga
  onComponentLoaded(sectionId: string) {
    console.log(`Component ${sectionId} loaded`);
    this.loadedComponents.add(sectionId);
  }

  async scrollToSection(sectionId: string): Promise<boolean> {
    // Si es la sección hero, hacer scroll directamente
    if (sectionId === 'hero') {
      this.doScroll(sectionId);
      return true;
    }

    // Si el componente ya está cargado, hacer scroll
    if (this.loadedComponents.has(sectionId)) {
      await new Promise(resolve => setTimeout(resolve, 50));
      this.doScroll(sectionId);
      return true;
    }

    // Si no está cargado, buscar la instancia de LazyLoadComponent y forzar carga
    const lazyLoadInstance = this.lazyLoadComponents.find(instance => instance.sectionId === sectionId);

    if (lazyLoadInstance) {
      try {
        // Forzar carga del componente
        lazyLoadInstance.loadComponent();

        // Esperar a que se cargue (puedes mejorar esto con Promises si es necesario)
        await new Promise(resolve => setTimeout(resolve, 300));

        // Hacer scroll después de la carga
        this.doScroll(sectionId);
        return true;
      } catch (error) {
        console.error('Error loading component:', error);
        // Fallback: intentar scroll de todos modos
        this.doScroll(sectionId);
        return false;
      }
    } else {
      // Fallback: intentar scroll directamente
      this.doScroll(sectionId);
      return false;
    }
  }

  private doScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  private setupTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }

  private setupSmoothScroll() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        event.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const targetId = href.substring(1);
          this.scrollToSection(targetId);
        }
      }
    });
  }

  changeLang(lang: 'es' | 'en') {
    this.router.navigate([`/${lang}/home`]);
  }
}
