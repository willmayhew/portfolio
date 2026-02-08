import { Component, OnInit } from '@angular/core';
import { TimeLineEventExtra } from '../../interfaces/time-line-event-extra';
import { ExperienceService } from '../../services/experience.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    standalone: false
})
export class ExperienceComponent implements OnInit {

  readonly timelineEvents$ = this.experienceService.getEvents();

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {

  }

  trackById(index: number, event: TimeLineEventExtra): string {
    return event.id ?? index.toString();
  } 

}