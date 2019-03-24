import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavModeComponent } from './sidenav-mode.component';
import { MatSidenavModule, MatRadioModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('SidenavModeComponent', () => {
  let component: SidenavModeComponent;
  let fixture: ComponentFixture<SidenavModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavModeComponent ],
      imports: [
        BrowserAnimationsModule,
        MatSidenavModule,
        MatRadioModule,
        SharedModule,
        HttpClientModule
      ],

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
