import { Component, OnInit } from '@angular/core';
import { TimeLineEventExtra } from 'src/app/interfaces/time-line-event-extra';
import { ExperienceService } from 'src/app/services/experience.service';

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

  trackById(_: number, event: TimeLineEventExtra): string {
    return event.id;
  }

}