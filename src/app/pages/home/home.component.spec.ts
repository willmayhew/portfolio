import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Personal Information Tests', () => {
    it('should have a username title', () => {
      const usernameTitle = fixture.debugElement.query(By.css('#username')).nativeElement as HTMLAnchorElement;
      expect(usernameTitle).toBeTruthy();
    })
  
    it('should contain Github link with the correct href.', () => {
      const githubBut = fixture.debugElement.query(By.css('#github-button')).nativeElement as HTMLAnchorElement;
      expect(githubBut.href).toContain('github.com/');
    })
  
    it('should render an "about me" section with some text', () => {
      const aboutmeSpan = fixture.debugElement.query(By.css('.about-me-section span')).nativeElement;
      expect(aboutmeSpan.textContent.trim().length).toBeGreaterThan(0);
    })
  })

  describe('Navigation Tests', () => {
    it('should have three nav buttons referencing the locations #experience, #skills and #projects.', () => {
      const navButtons = fixture.debugElement.queryAll(By.css('.home-buttons a'));
      const buttonHrefs = navButtons.map(btn => (btn.nativeElement as HTMLAnchorElement).getAttribute('href'));
  
      expect(buttonHrefs).toEqual(["#experience", "#skills", "#projects"]);
    })

    it('should have three sections with id references #experience, #skills and #projects', () => {
      const navButtons = fixture.debugElement.queryAll(By.css('.home-buttons a'));
      const buttonHrefs = navButtons.map(btn => (btn.nativeElement as HTMLAnchorElement).getAttribute('href'));
  
      expect(buttonHrefs).toEqual(["#experience", "#skills", "#projects"]);
    })
  })

});
