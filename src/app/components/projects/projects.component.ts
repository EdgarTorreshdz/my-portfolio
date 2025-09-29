import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../shared/i18n.service';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { Project } from '../../models/project';
import { PROJECTS } from '../../data/projects.data';
import { getTechnologiesClass } from '../../shared/utils/tech-colors';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  currentSlide = 0;

  lightboxIndex: number | null = null;
  // --- NUEVO: setter para capturar el panel cuando aparece ---
  private _modalPanel?: ElementRef<HTMLDivElement>;
  @ViewChild('modalPanel') set modalPanelRef(el: ElementRef<HTMLDivElement> | undefined) {
    this._modalPanel = el;
    if (el) {
      // En cuanto se inserta el panel en el DOM, resetea el scroll interno
      el.nativeElement.scrollTop = 0;
      // Opcional: focus para evitar glitches en iOS
      el.nativeElement.focus({ preventScroll: true });
    }
  }
  private get modalPanel(): HTMLDivElement | null {
    return this._modalPanel?.nativeElement ?? null;
  }

  projects: Project[] = [];
  filteredProjects: Project[] = [];
  paginatedProjects: Project[] = [];

  categories: string[] = ['Todos', 'Frontend', 'Backend', 'Fullstack', 'TechnicalTest'];
  selectedCategory = 'Todos';

  currentPage = 1;
  itemsPerPage = 4;
  totalPages = 1;

  selectedProject: Project | null = null;
  getTechnologiesClass = getTechnologiesClass;

  constructor(public i18n: I18nService) {}

  get mainImage(): string | undefined {
    return this.selectedProject?.images.find(img => img.type === 'main')?.url;
  }
  get siteImages(): string[] {
    return this.selectedProject ? this.selectedProject.images.filter(i => i.type === 'site').map(i => i.url) : [];
  }
  get galleryImages(): string[] {
    if (!this.selectedProject) return [];
    return this.selectedProject.images.filter(img => img.type === 'site').map(img => img.url);
  }

  ngOnInit(): void {
    this.loadProjects();
    this.filterProjects();
    this.i18n.langChange.subscribe(() => {
      this.loadProjects();
      this.filterProjects(this.selectedCategory);
    });
  }

  @HostListener('document:keydown.escape')
  handleEscapeKey() { if (this.selectedProject) this.closeModal(); }

  loadProjects(): void {
    this.projects = PROJECTS.map((p, index) => ({ ...p, id: index + 1 }));
  }

  filterProjects(category: string = 'Todos'): void {
    this.selectedCategory = category;
    this.filteredProjects = category === 'Todos'
      ? this.projects
      : this.projects.filter(project => project.category === category);
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredProjects.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedProjects = this.filteredProjects.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
     if (this.currentPage < this.totalPages) { 
      this.currentPage++; this.updatePagination();
      this.scrollModalToTop();
      } 
    }
    
  prevPage(): void {
     if (this.currentPage > 1) { 
      this.currentPage--; this.updatePagination(); 
      this.scrollModalToTop();
     } 
    }

  t(key: string) { return this.i18n.t(key); }

  // --- IMPORTANTE: quitar cualquier window.scrollTo({top:0}) ---
  openProjectModal(project: Project) {
    this.scrollModalToTop();

    this.selectedProject = project;
    document.body.style.overflow = 'hidden'; // bloquea scroll del fondo
    // No necesitas setTimeout aquí gracias al setter de @ViewChild
  }

  scrollModalToTop() {
    const appComponent: any = (window as any).appComponent;
    if (appComponent && typeof appComponent.scrollToSection === 'function') {
      appComponent.scrollToSection('projects'); // usa tu mismo método con offset de header
    } else {
      const element = document.getElementById('projects');
      if(element){
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  closeModal() {
    this.selectedProject = null;
    document.body.style.overflow = ''; // restaura scroll
  }

nextSlide() {
  if (this.galleryImages.length > 0) {
    this.currentSlide = (this.currentSlide + 1) % this.galleryImages.length;
  }
}

prevSlide() {
  if (this.galleryImages.length > 0) {
    this.currentSlide =
      (this.currentSlide - 1 + this.galleryImages.length) % this.galleryImages.length;
  }
}

goToSlide(index: number) {
  this.currentSlide = index;
}
}
