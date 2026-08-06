import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Experience } from '../../models/experience.model';
import { CompanyCardComponent } from '../company-card/company-card.component';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [CommonModule, CompanyCardComponent],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.scss'
})
export class TimelineItemComponent {
  @Input() experience!: Experience;
}
