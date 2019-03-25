import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditDescComponent } from './reddit-desc.component';

describe('RedditDescComponent', () => {
  let component: RedditDescComponent;
  let fixture: ComponentFixture<RedditDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditDescComponent ]
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
