import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditListComponent } from './reddit-list.component';
import { AgoPipe } from '../pipes/ago-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';

describe('RedditListComponent', () => {
  let component: RedditListComponent;
  let fixture: ComponentFixture<RedditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditListComponent, AgoPipe ],
      providers: [
        // AgoPipe
      ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
