import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModeComponent } from './sidenav-mode.component';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [SidenavModeComponent],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    SidenavModeComponent
],
})
export class SidenavModeModule { }
