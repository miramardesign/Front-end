import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModeComponent } from './sidenav-mode.component';

@NgModule({
  declarations: [SidenavModeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidenavModeComponent
],
})
export class SidenavModeModule { }
