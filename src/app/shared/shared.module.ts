import { NgModule } from '@angular/core';
import { CommonModule, I18nPluralPipe } from '@angular/common';
import { RedditListComponent } from './reddit-list/reddit-list.component';
import { AgoPipe } from './pipes/ago-pipe.pipe';

@NgModule({
  declarations: [RedditListComponent, AgoPipe],
  imports: [
    CommonModule
  ],
  exports: [
    RedditListComponent,
  ],
 // providers: [I18nPluralPipe]
})
export class SharedModule { }
