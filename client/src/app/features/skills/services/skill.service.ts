import { Injectable } from '@angular/core';
import { SkillCategory } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  categories: SkillCategory[] = [

    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', percentage: 95 },
        { name: 'TypeScript', percentage: 92 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'HTML5', percentage: 95 },
        { name: 'CSS3', percentage: 90 },
        { name: 'Bootstrap', percentage: 92 }
      ]
    },

    {
      title: 'Backend',
      skills: [
        { name: 'C#', percentage: 98 },
        { name: 'ASP.NET Core', percentage: 95 },
        { name: 'REST API', percentage: 95 },
        { name: 'Node.js', percentage: 80 }
      ]
    },

    {
      title: 'Database',
      skills: [
        { name: 'SQL Server', percentage: 98 },
        { name: 'MySQL', percentage: 90 },
        { name: 'PostgreSQL', percentage: 85 }
      ]
    }

  ];

  tools = [
    'Git',
    'GitHub',
    'Visual Studio',
    'VS Code',
    'Docker',
    'Azure',
    'Postman',
    'Swagger',
    'Crystal Reports'
  ];
}
