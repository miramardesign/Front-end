import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModeComponent } from './sidenav-mode.component';
import { MatSidenavModule, MatRadioButton } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';


@NgModule({
  declarations: [SidenavModeComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  exports: [
    SidenavModeComponent
],
})
export class SidenavModeModule { }
