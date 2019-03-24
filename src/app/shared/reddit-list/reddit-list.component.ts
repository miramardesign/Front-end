import { Component, OnInit } from '@angular/core';
import { RedditServiceService } from '../services/reddit-service.service';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.scss']
})
export class RedditListComponent implements OnInit {

  public redditList: any = [];
  public nowEpoch = new Date().getTime();
    constructor(private redditService: RedditServiceService  ) { }

ngOnInit() {

  this.redditService.getTop(50).subscribe(resTop => {
    console.log('restop:', resTop);
    if (resTop && resTop.data && resTop.data.children) {
      this.redditList = resTop.data.children;
    }

  });
}

}
