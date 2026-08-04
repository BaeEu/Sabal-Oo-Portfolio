import { Component, OnInit } from '@angular/core';

import { PROFILE } from '../../../../core/constants/profile.constant';
import { STATISTICS } from '../../../../core/constants/statistics.constant';
import { ROLES } from '../../../../core/constants/roles.constant';

import { StatisticsComponent } from '../statistics/statistics.component';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { TypingService } from '../../../../core/services/typing.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [StatisticsComponent, SocialLinksComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  profile = PROFILE;

  typedText = '';

  roles = ROLES;

  constructor(
    private typingService: TypingService
  ) { }



  ngOnInit(): void {


    this.typingService
      .typingEffect(this.roles)
      .subscribe(text => {

        this.typedText = text;

      });


  }
}
