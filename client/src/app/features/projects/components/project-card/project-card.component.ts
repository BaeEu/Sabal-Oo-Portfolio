import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../models/project.model';
import { TechnologyBadgeComponent } from '../technology-badge/technology-badge.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TechnologyBadgeComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
