import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../services/user-stats/user-stats.service';

@Component({
    selector: 'app-user-stats',
    templateUrl: './user-stats.component.html',
    styleUrls: ['./user-stats.component.scss'],
    standalone: false
})
export class UserStatsComponent implements OnInit {

  readonly skillGroups$ = this.userStatsService.getSkillGroups();

  constructor(private userStatsService: UserStatsService) {}

  ngOnInit(): void {
  }
}
