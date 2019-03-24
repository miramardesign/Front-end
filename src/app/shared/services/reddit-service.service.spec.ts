import { TestBed } from '@angular/core/testing';

import { RedditServiceService } from './reddit-service.service';

describe('RedditServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditServiceService = TestBed.get(RedditServiceService);
    expect(service).toBeTruthy();
  });
});
