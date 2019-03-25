import { Component, OnInit } from '@angular/core';
import { RedditServiceService } from '../services/reddit-service.service';
import { PersistenceService } from '../services/persistence-service';
import * as md from '../../shared/models';

@Component({
  selector: 'app-reddit-desc',
  templateUrl: './reddit-desc.component.html',
  styleUrls: ['./reddit-desc.component.scss']
})
export class RedditDescComponent implements OnInit {

  constructor(private redditService: RedditServiceService, public perist: PersistenceService) { }
  private item: md.DataChild;
  ngOnInit() {

    this.redditService.getDesc().subscribe(child => {
      console.log('subscribe returned', child);
      this.item = child;
    });

  }

}
