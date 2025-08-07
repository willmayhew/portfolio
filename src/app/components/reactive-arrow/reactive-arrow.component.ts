import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-arrow',
  templateUrl: './reactive-arrow.component.html',
  styleUrls: ['./reactive-arrow.component.scss']
})
export class ReactiveArrowComponent implements OnInit {

  isFaded = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFaded = scrollPosition >= 200;
  }

  arrowPressed() {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}
