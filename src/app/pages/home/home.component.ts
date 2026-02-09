import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {

  readonly profile$ = this.dataService.getProfile();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
