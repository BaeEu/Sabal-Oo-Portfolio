import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-badge',
  standalone: true,
  imports: [],
  templateUrl: './technology-badge.component.html',
  styleUrl: './technology-badge.component.scss'
})
export class TechnologyBadgeComponent {
  @Input() technology = '';
}
