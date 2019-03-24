import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditListComponent } from './reddit-list/reddit-list.component';

@NgModule({
  declarations: [RedditListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RedditListComponent
],
})
export class SharedModule { }
