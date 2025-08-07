import { TestBed } from '@angular/core/testing';

import { PersonalRepositoryService } from './personal-repository.service';

describe('PersonalRepositoryService', () => {
  let service: PersonalRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
