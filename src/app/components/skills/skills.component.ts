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
    { name: 'Angular', percentage: 90, color: 'primary' },
    { name: 'TypeScript', percentage: 85, color: 'primary' },
    { name: 'JavaScript', percentage: 80, color: 'primary' },
    { name: 'HTML/CSS', percentage: 95, color: 'primary' },
    { name: 'Tailwind CSS', percentage: 85, color: 'primary' },
    { name: 'Node.js', percentage: 75, color: 'primary' }
  ];

  softSkills: Skill[] = [];
  private langChangeSubscription!: Subscription;

  constructor(public i18n: I18nService) { }

  ngOnInit(): void {
    console.log('Skills iniciando');
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
      { name: this.t('skills.problemSolving'), percentage: 85, color: 'secondary' },
      { name: this.t('skills.communication'), percentage: 80, color: 'secondary' },
      { name: this.t('skills.timeManagement'), percentage: 75, color: 'secondary' },
      { name: this.t('skills.creativity'), percentage: 85, color: 'secondary' }
    ];
  }

  t(key: string): string {
    return this.i18n.t(key);
  }
}
