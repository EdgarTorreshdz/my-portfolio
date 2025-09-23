import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../shared/i18n.service';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { Project } from '../../models/project';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  paginatedProjects: Project[] = [];

  categories: string[] = ['Todos', 'Frontend', 'Backend', 'Fullstack', 'TechnicalTest'];
  selectedCategory: string = 'Todos';

  // Paginación
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalPages: number = 1;

  constructor(public i18n: I18nService) {}

  ngOnInit(): void {
    this.loadProjects();
    this.filterProjects();
    this.i18n.langChange.subscribe(() => {
      this.loadProjects();
      this.filterProjects(this.selectedCategory);
    });
  }

  loadProjects(): void {
    this.projects = PROJECTS.map((p, index) => ({
      ...p,
      id: index + 1
    }));
  }

  filterProjects(category: string = 'Todos'): void {
    this.selectedCategory = category;
    if (category === 'Todos') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
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
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  t(key: string) {
    return this.i18n.t(key);
  }
}
