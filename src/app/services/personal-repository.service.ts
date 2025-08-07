import { Injectable } from '@angular/core';
import { GithubRepo } from '../interfaces/github-repo';
import { Observable, of } from 'rxjs';

const FEATURED_REPOS: GithubRepo[] = [
  {
    id: 1,
    html_url: "",
    name: "Cyber Security Escape Room Game",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tellus sollicitudin, vehicula arcu at, consequat orci. Proin quam mi, finibus at varius fermentum, feugiat quis nisi. Phasellus id porta neque. Sed non mattis nisl. Aliquam ut maximus nisl. Suspendisse tempus odio id lectus maximus, a mollis nisi efficitur.Nam luctus suscipit pellentesque.In dignissim auctor risus sit amet feugiat.Suspendisse facilisis nisl sed tortor placerat, sed sagittis lectus aliquet.Sed dignissim velit vel bibendum gravida.",
    language: "C#, Unity"
  },
  {
    id: 2,
    html_url: "",
    name: "Tetrecs - A Tetris Parody",
    description: "Cras pretium feugiat fermentum. Integer nec diam interdum, finibus nisl id, maximus orci. Morbi gravida velit id purus viverra, id ornare turpis bibendum. Proin finibus magna purus, ut mollis sapien porttitor eu. Cras ut risus urna. Quisque sed porttitor turpis. Morbi nec odio nec quam malesuada efficitur sed eu nunc. Phasellus blandit pretium pellentesque. Quisque iaculis et tellus non vestibulum.",
    language: "Java, JavaFX"
  },
  {
    id: 3,
    html_url: "",
    name: "Prediction of Secondary Protein Structures",
    description: "Aliquam erat volutpat. Phasellus sit amet tortor id diam sagittis euismod. Morbi felis quam, venenatis nec turpis sit amet, pretium gravida sapien. Maecenas convallis magna mi, in blandit ligula viverra et. Quisque aliquam lorem nec lectus tristique rhoncus. Sed aliquam orci ac arcu maximus auctor. Quisque leo arcu, cursus placerat erat at, porta cursus massa. Quisque pulvinar placerat rutrum. Nullam euismod est et viverra ornare.",
    language: "Python via Jupyter Notebook"
  }]

@Injectable({
  providedIn: 'root'
})
export class PersonalRepositoryService {

  constructor() { }

  getFeaturedRepos(): Observable<GithubRepo[]> {
    return of(FEATURED_REPOS);
  }

}
