import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Chart, ChartOptions, ChartType } from 'chart.js/auto';
import { GithubRepo } from 'src/app/interfaces/github-repo';
import { GithubUser } from 'src/app/interfaces/github-user';
import { GithubService } from 'src/app/services/github.service';
import * as Aos from 'aos';
import { PersonalRepositoryService } from 'src/app/services/personal-repository.service';

@Component({
    selector: 'app-github-stats',
    templateUrl: './github-stats.component.html',
    styleUrls: ['./github-stats.component.scss'],
    standalone: false
})
export class GithubStatsComponent implements OnInit {
  user!: GithubUser;

  readonly featuredRepos$ = this.personalRepositorySerivce.getFeaturedRepos();

  constructor(private personalRepositorySerivce: PersonalRepositoryService) { 
  }

  ngOnInit(): void {
  }

}
