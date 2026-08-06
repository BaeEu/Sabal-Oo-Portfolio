import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule, ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(
    public projectService: ProjectService
  ) { }
}
