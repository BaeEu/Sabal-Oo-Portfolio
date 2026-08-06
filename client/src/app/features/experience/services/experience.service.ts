import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experiences: Experience[] = [

    {
      company: 'ABC Software Co., Ltd.',

      logo: 'assets/images/company/default-company.png',

      position: 'Senior Full Stack Developer',

      duration: '2022 - Present',

      location: 'Yangon, Myanmar',

      employmentType: 'Full Time',

      description:
        'Developed enterprise-level ERP applications including Accounting, HR, Payroll, POS and Hospital Management systems.',

      technologies: [
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'Bootstrap'
      ],

      achievements: [

        'Designed scalable enterprise applications',

        'Optimized SQL performance',

        'Implemented REST APIs',

        'Mentored junior developers'

      ]

    }

  ];
}
