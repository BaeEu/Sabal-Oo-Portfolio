import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'skills',
                component: SkillsComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            },
            {
                path: 'experience',
                component: ExperienceComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];