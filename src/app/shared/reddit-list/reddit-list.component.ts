import { Component, OnInit } from '@angular/core';
import { RedditServiceService } from '../services/reddit-service.service';
import { PersistenceService } from '../services/persistence-service';
import { trigger, style, animate, transition } from '@angular/animations';
import * as md from '../../shared/models';

@Component({
  selector: 'app-reddit-list',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.scss']
})
export class RedditListComponent implements OnInit {

  public redditList: any = [];
  public hiddenList: any = [];
  public visitedList: any = [];

  public now = new Date().getTime() / 1000;
  constructor(
    private redditService: RedditServiceService,
    public perist: PersistenceService) { }

  /**
   * dismiss the listing and persist it as well
   * @param id a unique identifier to persist
   */
  public onDismiss(item: md.Child) {
    item.data.hidden = true;
    if (!this.isHidden(item.data.id)) {

      this.hiddenList.push(item.data.id);
      console.log('onDismiss called with id', item.data.id);
      this.perist.set('hidden', this.hiddenList);
    }
  }

  /**
   * dismiss all listings by adding them all to a list and then pushing to persistence
   */
  public onDismissAll(redditList) {
    console.log('dismissAll called'); // TODO;

    redditList.forEach(item => {
      const id = item.data.id;
      item.dismissed = true;
      if (this.hiddenList.indexOf(id) === -1) {
        this.hiddenList.push(id);
      }
    });
    this.perist.set('hidden', this.hiddenList);
  }

  /**
   * push the item into the main view
   */
  public onItemClick(item) {
    console.log('on itemclick called', item, 'id?', item.id);

    if (!this.isVisited(item.data.id)) {
      this.visitedList.push(item.data.id);
      item.data.visited = true;
      this.perist.set('visited', this.visitedList);
    }
    this.redditService.setDesc(item);
  }

  /**
   * restore all listings or we cant see them again if persisted
   */
  public onRestoreAll() {
    console.log('restoreAll called');

    this.redditList.forEach(item => {
      item.data.hidden = false;
    });
    this.visitedList = [];
    this.perist.set('visited', []);

    this.hiddenList = [];
    this.perist.set('hidden', []);
  }

  /**
   * if the item has been dismissed
   * @param id id to show hide
   */
  public isHidden(id) {
    return this.hiddenList.indexOf(id) > -1;
  }

  /**
   * if the item has been dismissed
   * @param id id to show hide
   */
  public isVisited(id) {
    return this.visitedList.indexOf(id) > -1;
  }

  ngOnInit() {

    this.hiddenList = this.perist.get('hidden') || [];
    this.visitedList = this.perist.get('visited') || [];

    /** get the listings from the api */
    this.redditService.getTop(50).subscribe(resTop => {
      if (resTop && resTop.data && resTop.data.children) {
        this.redditList = resTop.data.children;

        // pushed dismissed and visted into items
        this.redditList.forEach(item => {
          if (this.hiddenList.indexOf(item.data.id) > -1) {
            item.data.hidden = true;
          }
          if (this.visitedList.indexOf(item.data.id) > -1) {
            item.data.visited = true;
          }

        });

      }

    });
  }

}
