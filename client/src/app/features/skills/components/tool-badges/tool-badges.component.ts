import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool-badges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tool-badges.component.html',
  styleUrl: './tool-badges.component.scss'
})
export class ToolBadgesComponent {
  @Input() tools: string[] = [];
}
