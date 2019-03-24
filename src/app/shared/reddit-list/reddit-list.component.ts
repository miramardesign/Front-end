import { Component, OnInit } from '@angular/core';
import { RedditServiceService } from '../services/reddit-service.service';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.scss']
})
export class RedditListComponent implements OnInit {

  public redditList: any = [];
  public now = new Date().getTime() / 1000;
  constructor(private redditService: RedditServiceService) { }


   public itemPluralMapping = {
    second: {
      '=0': 'Just now',
      '=1': 'Just Now',
      other: '# Seconds ago'
    },
    minute: {
      //'=0' : '1 minute ago',
      '=1': '1 minute ago',
      other: '# minutes ago'
    },
    hour: {
      //'=0' : '1 hour ago',
      '=1': '1 hour ago',
      other: '# hours ago'
    },
  };

  /**
   * dismiss the listing and persist it as well
   * @param id a unique identifier to persist
   */
  public dismiss(id: string) {
    console.log('id', id); // TODO;
  }

  /**
   * dismiss all listings
   */
  public dismissAll(id: string) {
    console.log('dismissAll called'); // TODO;
  }

  /**
   * restore all listings or we cant see them again if persisted
   */
  public restoreAll(id: string) {
    console.log('restoreAll called'); // TODO;
  }


  ngOnInit() {

    /** get the listings from the api */
    this.redditService.getTop(50).subscribe(resTop => {
      if (resTop && resTop.data && resTop.data.children) {
        this.redditList = resTop.data.children;
      }

    });
  }

}
