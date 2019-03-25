import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavModeComponent } from './sidenav-mode/sidenav-mode.component';
import { MatSidenavModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { PersistenceService } from '../shared/services/persistence-service';

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
  providers: [PersistenceService]
})


export class CoreModule { }
