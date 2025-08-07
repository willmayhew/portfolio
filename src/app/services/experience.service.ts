import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TimeLineEventExtra } from 'src/app/interfaces/time-line-event-extra';
import { NgxTimelineItemPosition } from '@frxjs/ngx-timeline';

const EVENTS: TimeLineEventExtra[] = [
  {
    id: 'exp-1',
    title: 'Dorset Software',
    description: 'Training',
    timestamp: new Date('2024-10-08'),
    role: 'Graduate Developer'
  },
  {
    id: 'exp-2',
    title: 'Dorset Software',
    description: 'Working',
    timestamp: new Date('2025-07-03'),
    itemPosition: NgxTimelineItemPosition.ON_RIGHT,
    role: 'Junior Developer'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  getEvents(): Observable<TimeLineEventExtra[]> {
    return of(EVENTS);
  }
  
}
