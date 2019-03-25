import { NgModule } from '@angular/core';
import { CommonModule, I18nPluralPipe } from '@angular/common';
import { RedditListComponent } from './reddit-list/reddit-list.component';
import { AgoPipe } from './pipes/ago-pipe.pipe';
import { PersistenceService } from './services/persistence-service';
import { RedditDescComponent } from './reddit-desc/reddit-desc.component';

@NgModule({
  declarations: [RedditListComponent, AgoPipe, RedditDescComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RedditListComponent, RedditDescComponent
  ],
  providers: [PersistenceService]
})
export class SharedModule { }
