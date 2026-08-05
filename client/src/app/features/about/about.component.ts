import { Component } from '@angular/core';
import { ABOUT } from '../../core/constants/about.constant';

import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { CompetenciesComponent } from './components/competencies/competencies.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ProfileSummaryComponent, ExperienceCardComponent, EducationCardComponent, CompetenciesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  about = ABOUT;
}
