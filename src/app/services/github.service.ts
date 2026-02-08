import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubUser } from '../interfaces/github-user';
import { Observable } from 'rxjs';
import { GithubRepo } from '../interfaces/github-repo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiBase = 'https://api.github.com';
  private username = environment.githubUsername;;

  constructor(private http: HttpClient) {}

  getUserStats(): Observable<GithubUser> {
    const headers = new HttpHeaders({
      Authorization: `token ${environment.githubToken}`
    });
    return this.http.get<GithubUser>(`${this.apiBase}/users/${this.username}`, { headers });
  }

  getUserRepos(): Observable<GithubRepo[]> {
    const headers = new HttpHeaders({
      Authorization: `token ${environment.githubToken}`
    });
    return this.http.get<GithubRepo[]>(
      `${this.apiBase}/users/${this.username}/repos?per_page=100`, { headers }
    );
  }

  getRepoLanguages(repo: string): Observable<{ [lang: string]: number }> {
    const headers = new HttpHeaders({
      Authorization: `token ${environment.githubToken}`
    });
    return this.http.get<{ [lang: string]: number }>(
      `${this.apiBase}/repos/${this.username}/${repo}/languages`, { headers }
    );
  }
}
