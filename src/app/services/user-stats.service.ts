import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SkillGroup } from '../interfaces/skill-group';

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'tech-stack',
    title: 'Technology Stack',
    delay: 200,
    items: [
      'Java',
      'C#',
      'Python (Jupyter Notebooks)',
      'JavaScript',
      'React',
      'Angular',
      'VB.NET',
      'HTML',
      'CSS',
      'SQL'
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    delay: 300,
    items: [
      'JavaFX',
      'ASP.NET MVC',
      'Entity Framework',
      'Unity',
      'SQL Server'
    ]
  },
  {
    id: 'other-skills',
    title: 'Other Skills',
    delay: 400,
    items: [
      'Machine Learning',
      'Relational Databases',
      'Data Structures & Algorithms'
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  constructor() { }

  getSkillGroups(): Observable<SkillGroup[]> {
    return of(SKILL_GROUPS);
  }
}
