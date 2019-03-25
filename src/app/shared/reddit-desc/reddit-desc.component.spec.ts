import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditDescComponent } from './reddit-desc.component';
import { HttpClientModule } from '@angular/common/http';
import { PersistenceService } from '../services/persistence-service';

describe('RedditDescComponent', () => {
  let component: RedditDescComponent;
  let fixture: ComponentFixture<RedditDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RedditDescComponent],
      providers: [
        PersistenceService
      ],
      imports: [HttpClientModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
