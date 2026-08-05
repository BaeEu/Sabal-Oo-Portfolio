import { Component } from '@angular/core';
import { SkillService } from './services/skill.service';
import { SkillCategoryComponent } from './components/skill-category/skill-category.component';
import { ToolBadgesComponent } from './components/tool-badges/tool-badges.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule, SkillCategoryComponent, ToolBadgesComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(public skillService: SkillService) { }
}
