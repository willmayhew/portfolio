import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PersonalRepositoryService } from './personal-repository.service';

describe('PersonalRepositoryService', () => {
  let service: PersonalRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PersonalRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

