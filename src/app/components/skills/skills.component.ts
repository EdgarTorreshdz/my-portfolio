import { Component } from '@angular/core';
import { SkillBarComponent } from '../../shared/skill-bar/skill-bar.component';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBarComponent,CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  technicalSkills: Skill[] = [
    { name: 'Angular', percentage: 90, color: 'primary' },
    { name: 'TypeScript', percentage: 85, color: 'primary' },
    { name: 'JavaScript', percentage: 80, color: 'primary' },
    { name: 'HTML/CSS', percentage: 95, color: 'primary' },
    { name: 'Tailwind CSS', percentage: 85, color: 'primary' },
    { name: 'Node.js', percentage: 75, color: 'primary' }
  ];

  softSkills: Skill[] = [
    { name: 'Trabajo en equipo', percentage: 90, color: 'secondary' },
    { name: 'Resolución de problemas', percentage: 85, color: 'secondary' },
    { name: 'Comunicación', percentage: 80, color: 'secondary' },
    { name: 'Gestión de tiempo', percentage: 75, color: 'secondary' },
    { name: 'Creatividad', percentage: 85, color: 'secondary' }
  ];

  ngOnInit():void{
    console.log('Skills iniciando');

  }
}
