import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  startedDate: Date;
  dates: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  id: string;
  title: string;
  delay: number;
  items: string[];
}

export interface Project {
  id: number;
  html_url: string;
  name: string;
  description: string;
  language: string;
  topics: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('assets/data/profile.json');
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>('assets/data/experience.json');
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('assets/data/skills.json');
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('assets/data/projects.json');
  }
}
