import { Component, OnInit } from '@angular/core';
import { RedditServiceService } from '../services/reddit-service.service';
import { PersistenceService } from '../services/persistence-service';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.scss']
})
export class RedditListComponent implements OnInit {

  public redditList: any = [];
  public now = new Date().getTime() / 1000;
  constructor(private redditService: RedditServiceService, public perist: PersistenceService) { }

  /**
   * dismiss the listing and persist it as well
   * @param id a unique identifier to persist
   */
  public onDismiss(id: string) {
    console.log('onDismiss called with id', id); // TODO;
    this.perist.set(id, true);
  }

  /**
   * dismiss all listings
   */
  public onDismissAll() {
    console.log('dismissAll called'); // TODO;
  }

  /**
   * push the item into the main view
   */
  public onItemClick(item) {
    console.log('on itemclick called', item); // TODO;
  }

  /**
   * restore all listings or we cant see them again if persisted
   */
  public onRestoreAll() {
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
