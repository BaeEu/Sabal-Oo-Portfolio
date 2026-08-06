import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss'
})
export class CompanyCardComponent {
  @Input() experience!: Experience;
}
