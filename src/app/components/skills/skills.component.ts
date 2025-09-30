import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkillBarComponent } from '../../shared/skill-bar/skill-bar.component';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../shared/i18n.service';
import { Subscription } from 'rxjs';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBarComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  technicalSkills: Skill[] = [
    { name: '.NET', percentage: 90, color: 'primary' },
    { name: 'C#', percentage: 88, color: 'primary' },
    { name: 'Angular', percentage: 85, color: 'primary' },
    { name: 'TypeScript', percentage: 85, color: 'primary' },
    { name: 'JavaScript', percentage: 88, color: 'primary' },
    { name: 'PHP', percentage: 75, color: 'primary' },
    { name: 'Laravel', percentage: 70, color: 'primary' },
    { name: 'SQL/MySQL', percentage: 85, color: 'primary' },
    { name: 'AWS', percentage: 75, color: 'primary' },
    { name: 'Azure', percentage: 70, color: 'primary' },
    { name: 'Node.js', percentage: 75, color: 'primary' },
    { name: 'Express.js', percentage: 70, color: 'primary' }
  ];

  // Habilidades por categorías
  languagesSkills: Skill[] = [
    { name: 'C#', percentage: 88, color: 'accent' },
    { name: 'TypeScript', percentage: 85, color: 'accent' },
    { name: 'JavaScript', percentage: 88, color: 'accent' },
    { name: 'PHP', percentage: 75, color: 'accent' }
  ];

  frameworksSkills: Skill[] = [
    { name: '.NET', percentage: 90, color: 'primary' },
    { name: 'Angular', percentage: 85, color: 'primary' },
    { name: 'Laravel', percentage: 70, color: 'primary' },
    { name: 'Node.js', percentage: 75, color: 'primary' },
    { name: 'Express.js', percentage: 70, color: 'primary' }
  ];

  databasesSkills: Skill[] = [
    { name: 'SQL Server', percentage: 85, color: 'secondary' },
    { name: 'MySQL', percentage: 80, color: 'secondary' },
  ];

  cloudSkills: Skill[] = [
    { name: 'AWS', percentage: 75, color: 'warning' },
    { name: 'Azure', percentage: 70, color: 'warning' },
    { name: 'Vercel', percentage: 65, color: 'warning' }
  ];

  softSkills: Skill[] = [];
  private langChangeSubscription!: Subscription;

  constructor(public i18n: I18nService) { }

  ngOnInit(): void {
    this.updateSoftSkills();

    // Suscribirse a cambios de idioma
    this.langChangeSubscription = this.i18n.langChange.subscribe(() => {
      this.updateSoftSkills();
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  private updateSoftSkills(): void {
    this.softSkills = [
      { name: this.t('skills.teamwork'), percentage: 90, color: 'secondary' },
      { name: this.t('skills.problemSolving'), percentage: 88, color: 'secondary' },
      { name: this.t('skills.communication'), percentage: 85, color: 'secondary' },
      { name: this.t('skills.timeManagement'), percentage: 82, color: 'secondary' },
      { name: this.t('skills.creativity'), percentage: 85, color: 'secondary' },
      { name: this.t('skills.agile'), percentage: 80, color: 'secondary' }
    ];
  }

  t(key: string): string {
    return this.i18n.t(key);
  }

  // Método para obtener el nombre de la categoría traducida
  getCategoryTitle(category: string): string {
    return this.t(`skills.${category}`);
  }
}
