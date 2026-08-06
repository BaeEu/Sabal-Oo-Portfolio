import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineItemComponent } from './components/timeline-item/timeline-item.component';
import { ExperienceService } from './services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    TimelineItemComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  constructor(
    public experienceService: ExperienceService
  ) { }
}
