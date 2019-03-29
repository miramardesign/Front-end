import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditListComponent } from './reddit-list.component';
import { AgoPipe } from '../pipes/ago-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PersistenceService } from '../services/persistence-service';
import * as md from '../../shared/models';

describe('RedditListComponent', () => {
  let component: RedditListComponent;
  let fixture: ComponentFixture<RedditListComponent>;

  const redditListLocal: md.RootObject = {
    kind: 'Listing',
    data: {
      modhash: 'uo8ez9e1lf807810187b428b01e59cd38a9303245aa595d992',
      children: [
        {
          kind: 't3',
          data: {
            domain: 'i.imgur.com',
            banned_by: null,
            media_embed: { content: '' },
            subreddit: 'funny',
            selftext_html: null,
            selftext: '',
            likes: null,
            user_reports: [],
            secure_media: null,
            link_flair_text: null,
            id: '2hqlxp',
            gilded: 0,
            secure_media_embed: { content: '' },
            clicked: false,
            report_reasons: null,
            author: 'washedupwornout',
            media: null,
            score: 4841,
            approved_by: null,
            over_18: false,
            hidden: false,
            thumbnail: 'http://b.thumbs.redditmedia.com/9N1f7UGKM5fPZydrsgbb4_SUyyLW7A27um1VOygY3LM.jpg',
            subreddit_id: 't5_2qh33',
            edited: false,
            link_flair_css_class: null,
            author_flair_css_class: null,
            downs: 0,
            mod_reports: [],
            saved: false,
            is_self: false,
            name: 't3_2hqlxp',
            permalink: '/r/funny/comments/2hqlxp/man_trying_to_return_a_dogs_toy_gets_tricked_into/',
            stickied: false,
            created: 1411975314,
            url: 'http://i.imgur.com/4CHXnj2.gif',
            author_flair_text: null,
            title: 'Man trying to return a dog\'s toy gets tricked into playing fetch',
            created_utc: 1411946514,
            ups: 4841,
            num_comments: 958,
            visited: false,
            num_reports: null,
            distinguished: null
          }
        },
        {
          kind: 't3',
          data: {
            domain: 'i.test.com',
            banned_by: null,
            media_embed: { content: '' },
            subreddit: 'funny',
            selftext_html: null,
            selftext: '',
            likes: null,
            user_reports: [],
            secure_media: null,
            link_flair_text: null,
            id: 'abc',
            gilded: 0,
            secure_media_embed: { content: '' },
            clicked: false,
            report_reasons: null,
            author: 'washedupwornout',
            media: null,
            score: 4841,
            approved_by: null,
            over_18: false,
            hidden: false,
            thumbnail: 'http://b.thumbs.redditmedia.com/9N1f7UGKM5fPZydrsgbb4_SUyyLW7A27um1VOygY3LM.jpg',
            subreddit_id: 't5_2qh33',
            edited: false,
            link_flair_css_class: null,
            author_flair_css_class: null,
            downs: 0,
            mod_reports: [],
            saved: false,
            is_self: false,
            name: 't3_2hqlxp',
            permalink: '/r/funny/comments/2hqlxp/man_trying_to_return_a_dogs_toy_gets_tricked_into/',
            stickied: false,
            created: 1411975314,
            url: 'http://i.imgur.com/4CHXnj2.gif',
            author_flair_text: null,
            title: 'Man trying to return a dog\'s toy gets tricked into playing fetch',
            created_utc: 1411946514,
            ups: 4841,
            num_comments: 958,
            visited: false,
            num_reports: null,
            distinguished: null
          }
        }
      ]
    }
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RedditListComponent, AgoPipe],
      providers: [
        PersistenceService
      ],
      imports: [HttpClientModule]
    })
      .compileComponents();
  })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create have hiddenlist initialized as false', () => {
    component.redditList = redditListLocal;
    const item = component.redditList.data.children[0];
    expect(item.data.hidden).toEqual(false);
  });

  it('should create manage hiddenlist to true after ondismiss', () => {
    component.redditList = redditListLocal;
    const item = component.redditList.data.children[0];
    component.onDismiss(item);
    expect(item.data.hidden).toEqual(true);

  });

  it('should create dismmiss item and add to hiddenlist', () => {
    component.redditList = redditListLocal;
    const item = component.redditList.data.children[0];
    component.onDismiss(item);
    expect(item.data.hidden).toEqual(true);

    component.redditList = redditListLocal;

    component.onRestoreAll();
    expect(item.data.hidden).toEqual(false);

  });

});
