import { TestBed } from '@angular/core/testing';

import { NoIdeaService } from './no-idea.service';

describe('NoIdeaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoIdeaService = TestBed.get(NoIdeaService);
    expect(service).toBeTruthy();
  });
});
