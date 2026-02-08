import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor() {}
  
  ngOnInit(): void {
    AOS.init({
      duration: 600,
      once: false,
      mirror: true,
      offset: 200
    });
    
    // Refresh AOS on route changes
    window.addEventListener('scroll', () => {
      AOS.refresh();
    });
  }
}
