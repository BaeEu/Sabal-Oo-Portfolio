import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [

    {
      title: 'Accounting Management System',

      description:
        'Enterprise accounting solution developed using ASP.NET Core and SQL Server for financial management.',

      image: 'assets/images/projects/accounting.jpg',

      technologies: [
        'ASP.NET Core',
        'Angular',
        'SQL Server',
        'Bootstrap'
      ],

      github: 'https://github.com/BaeEu',

      demo: '#'
    },

    {
      title: 'Hospital Management System',

      description:
        'Hospital information system including registration, pharmacy, laboratory and billing.',

      image: 'assets/images/projects/hospital.jpg',

      technologies: [
        'C#',
        'ASP.NET',
        'SQL Server'
      ],

      github: 'https://github.com/BaeEu',

      demo: '#'
    },

    {
      title: 'Payroll Management System',

      description:
        'Payroll and attendance management system for enterprise companies.',

      image: 'assets/images/projects/payroll.jpg',

      technologies: [
        'C#',
        'SQL Server',
        'Crystal Reports'
      ],

      github: 'https://github.com/BaeEu',

      demo: '#'
    },

    {
      title: 'HR Management System',

      description:
        'Human resource management including recruitment, leave and employee profile.',

      image: 'assets/images/projects/survey.jpg',

      technologies: [
        'Angular',
        '.NET',
        'SQL Server'
      ],

      github: 'https://github.com/BaeEu',

      demo: '#'
    },

    {
      title: 'POS System',

      description:
        'Point of Sale software for retail businesses with inventory management.',

      image: 'assets/images/projects/pos.jpg',

      technologies: [
        'WinForms',
        'SQL Server'
      ],

      github: 'https://github.com/BaeEu',

      demo: '#'
    },

    {
      title: 'Hotel Management System',

      description:
        'Reservation and room booking system with billing management.',

      image: 'assets/images/projects/hotel.jpg',

      technologies: [
        'ASP.NET',
        'MySQL'
      ],

      github: 'https://github.com/BaeEu',

      demo: '#'
    }

  ];

}
