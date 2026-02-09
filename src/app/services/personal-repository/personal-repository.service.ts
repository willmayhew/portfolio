import { Injectable } from '@angular/core';
import { GithubRepo } from '../../interfaces/github-repo';
import { Observable, map } from 'rxjs';
import { DataService, Project } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalRepositoryService {

  constructor(private dataService: DataService) { }

  getFeaturedRepos(): Observable<GithubRepo[]> {
    return this.dataService.getProjects().pipe(
      map((projects: Project[]) => 
        projects.map(project => ({
          id: project.id,
          html_url: project.html_url,
          name: project.name,
          description: project.description,
          language: project.language
        }))
      )
    );
  }
}
