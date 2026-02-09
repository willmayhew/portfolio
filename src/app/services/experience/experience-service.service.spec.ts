import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ExperienceServiceService } from './experience-service.service';

describe('ExperienceServiceService', () => {
  let service: ExperienceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ExperienceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
