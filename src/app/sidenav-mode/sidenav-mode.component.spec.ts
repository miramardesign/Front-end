import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavModeComponent } from './sidenav-mode.component';

describe('SidenavModeComponent', () => {
  let component: SidenavModeComponent;
  let fixture: ComponentFixture<SidenavModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
