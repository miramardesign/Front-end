import { TestBed, async } from '@angular/core/testing';

import { RedditServiceService } from './reddit-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('RedditServiceService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],

    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: RedditServiceService = TestBed.get(RedditServiceService);
    expect(service).toBeTruthy();
  });
});
