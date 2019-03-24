import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditListComponent } from './reddit-list/reddit-list.component';
import { AgoPipe } from './pipes/ago-pipe.pipe';

@NgModule({
  declarations: [RedditListComponent, AgoPipe],
  imports: [
    CommonModule
  ],
  exports: [
    RedditListComponent
],
})
export class SharedModule { }
