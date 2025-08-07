import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveArrowComponent } from './reactive-arrow.component';

describe('ReactiveArrowComponent', () => {
  let component: ReactiveArrowComponent;
  let fixture: ComponentFixture<ReactiveArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
