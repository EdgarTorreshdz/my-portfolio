import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../i18n.service';
import { Project } from '../../models/project';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;

  constructor(public i18n: I18nService) { }

  getTechnologiesClass(index: number): string {
    const colors = [
      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    ];
    return colors[index % colors.length];
  }

  t(key: string): string {
    return this.i18n.t(key);
  }
}
