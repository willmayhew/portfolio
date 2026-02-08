import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubStatsComponent } from './github-stats.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('GithubStatsComponent', () => {
  let component: GithubStatsComponent;
  let fixture: ComponentFixture<GithubStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [GithubStatsComponent],
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
