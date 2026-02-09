import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillGroup } from '../../interfaces/skill-group';
import { DataService, Skill } from '../data/data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  constructor(private dataService: DataService) { }

  getSkillGroups(): Observable<SkillGroup[]> {
    return this.dataService.getSkills().pipe(
      map((skills: Skill[]) => 
        skills.map(skill => ({
          id: skill.id,
          title: skill.title,
          delay: skill.delay,
          items: skill.items
        }))
      )
    );
  }
}
