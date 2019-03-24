import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavModeComponent } from './sidenav-mode/sidenav-mode.component';
import { MatSidenavModule, MatRadioButton } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';
// import { RedditListComponent } from '../shared/reddit-list/reddit-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SidenavModeComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatRadioModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    SidenavModeComponent
],
})


export class CoreModule { }
