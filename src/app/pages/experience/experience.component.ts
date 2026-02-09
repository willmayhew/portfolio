import { Component, OnInit } from '@angular/core';
import { TimeLineEventExtra } from '../../interfaces/time-line-event-extra';
import { ExperienceService } from '../../services/experience/experience.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    standalone: false
})
export class ExperienceComponent implements OnInit {

  readonly timelineEvents$ = this.experienceService.getEvents();
  private expandedIds = new Set<string>();

  toggleExpand(id?: string) {
    console.log(id);
    if (!id){
      return;
    }

    if (this.expandedIds.has(id)){
      this.expandedIds.delete(id);
    }
    else {
      this.expandedIds.add(id);
    }
  }

  isExpanded(id?: string) {
    if (!id){
      return false;
    }
    return this.expandedIds.has(id);
  }

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
  }

  trackById(index: number, event: TimeLineEventExtra): string {
    return event.id ?? index.toString();
  } 

}