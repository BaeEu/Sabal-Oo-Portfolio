import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../models/skill.model';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-skill-category',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './skill-category.component.html',
  styleUrl: './skill-category.component.scss'
})
export class SkillCategoryComponent {
  @Input() category!: SkillCategory;
}
