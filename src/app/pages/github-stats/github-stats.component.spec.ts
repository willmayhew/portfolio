import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubStatsComponent } from './github-stats.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GithubStatsComponent', () => {
  let component: GithubStatsComponent;
  let fixture: ComponentFixture<GithubStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubStatsComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
