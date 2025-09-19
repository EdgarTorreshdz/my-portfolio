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
  categories: string[] = ['Todos', 'Frontend', 'Backend', 'Fullstack', 'TechnicalTest'];
  selectedCategory: string = 'Todos';

  constructor(public i18n: I18nService) { }

  ngOnInit(): void {
    console.log('Projects iniciando');
    this.loadProjects();
    this.filterProjects();
  }

  loadProjects(): void {
    this.projects = PROJECTS.map((p, index) => ({
      ...p,
      id: index + 1
    }));
  }

  filterProjects(category: string = 'Todos'): void {
    console.log('Projects ', this.projects)
    this.selectedCategory = category;
    if (category === 'Todos') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  t(key: string) {
    return this.i18n.t(key);
  }
}
