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
  public dismissList: any = [];
  public visitedList: any = [];

  public now = new Date().getTime() / 1000;
  constructor(private redditService: RedditServiceService, public perist: PersistenceService) { }

  /**
   * dismiss the listing and persist it as well
   * @param id a unique identifier to persist
   */
  public onDismiss(item) {
    item.dismissed = true;
    if (!this.isDismissed(item.data.id)) {

      this.dismissList.push(item.data.id);
      console.log('onDismiss called with id', item.data.id);
      this.perist.set('dismiss', this.dismissList);
    }
  }

  /**
   * dismiss all listings by adding them all to a list and then pushing to persistence
   */
  public onDismissAll(redditList) {
    console.log('dismissAll called'); // TODO;

    redditList.forEach(item => {
      const id = item.data.id;
      if (this.dismissList.indexOf(id) === -1) {
        this.dismissList.push(id);
      }
    });
    this.perist.set('dismiss', this.dismissList);
  }

  /**
   * push the item into the main view
   */
  public onItemClick(item) {
    console.log('on itemclick called', item, 'id?', item.id);

    if (!this.isVisited(item.data.id)) {
      this.visitedList.push(item.data.id);
      item.isVisited = true;
      this.perist.set('visited', this.visitedList);

    }
    this.redditService.setDesc(item);
  }

  /**
   * restore all listings or we cant see them again if persisted
   */
  public onRestoreAll() {
    console.log('restoreAll called'); // TODO;
    this.dismissList = [];
    this.perist.set('dismiss', this.dismissList);
  }

  /**
   * if the item has been dismissed
   * @param id id to show hide
   */
  public isDismissed(id) {
    return this.dismissList.indexOf(id) > -1;
  }

  /**
   * if the item has been dismissed
   * @param id id to show hide
   */
  public isVisited(id) {
    return this.visitedList.indexOf(id) > -1;
  }

  ngOnInit() {

    this.dismissList = this.perist.get('dismiss') || [];
    this.visitedList = this.perist.get('visited') || [];

    /** get the listings from the api */
    this.redditService.getTop(50).subscribe(resTop => {
      if (resTop && resTop.data && resTop.data.children) {
        this.redditList = resTop.data.children;

        // pushed dismissed and visted into items
        this.redditList.forEach(item => {
          if (this.dismissList.indexOf(item.data.id) > 0) {
            item.isDismissed = true;
          }
          if (this.visitedList.indexOf(item.data.id) > 0) {
            item.isVisited = true;
          }

        });

      }

    });
  }

}
