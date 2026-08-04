import { Component } from '@angular/core';
import { STATISTICS } from '../../../../core/constants/statistics.constant';

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  statistics = STATISTICS;
}
