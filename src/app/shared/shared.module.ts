import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditListComponent } from './reddit-list/reddit-list.component';
import { AgoPipePipe } from './pipes/ago-pipe.pipe';

@NgModule({
  declarations: [RedditListComponent, AgoPipePipe],
  imports: [
    CommonModule
  ],
  exports: [
    RedditListComponent
],
})
export class SharedModule { }
