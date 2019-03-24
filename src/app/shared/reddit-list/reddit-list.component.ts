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

  /**
   * dismiss the listing and persist it as well
   * @param id a unique identifier to persist
   */
  public dismiss(id: string) {
    console.log('id'); //TODO;
  };

  ngOnInit() {

    /** get the listings from the api */
    this.redditService.getTop(50).subscribe(resTop => {
      console.log('restop:', resTop);
      if (resTop && resTop.data && resTop.data.children) {
        this.redditList = resTop.data.children;
      }

    });
  }

}
