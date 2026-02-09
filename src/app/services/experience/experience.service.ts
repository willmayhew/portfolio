import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TimeLineEventExtra } from 'src/app/interfaces/time-line-event-extra';
import { NgxTimelineItemPosition } from '@frxjs/ngx-timeline';
import { DataService, Experience } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private dataService: DataService) { }

  getEvents(): Observable<TimeLineEventExtra[]> {
    return this.dataService.getExperience().pipe(
      map((experiences: Experience[]) => 
        experiences.map((exp, index) => ({
          id: exp.id,
          title: exp.company,
          description: exp.description,
          timestamp: new Date(exp.startedDate),
          dates: exp.dates,
          role: exp.title,
          highlights: exp.highlights,
          itemPosition: index % 2 === 0 ? undefined : NgxTimelineItemPosition.ON_RIGHT
        }))
      )
    );
  }
}