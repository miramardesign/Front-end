import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { catchError, tap, distinctUntilChanged } from 'rxjs/operators';
import { HandleErrorMixin, Activatable, Mixin } from '../../shared/mixins/mixins';
import * as md from '../../shared/models';

/**
 * service for interacting with reddit api:
 *  https://www.reddit.com/dev/api
 */
@Injectable({
  providedIn: 'root'
})
@Mixin([Activatable, HandleErrorMixin])

export class RedditServiceService {

  listDesc$ = new Subject<md.DataChild>();

  handleError: (err: HttpErrorResponse) => Observable<any>;

  constructor(private http: HttpClient) {
  }

  // may need oauth?
  // https://www.reddit.com/r/videos/top.json?limit=50

  /**
   *
   * @param num the number of posts
   */
  public getTop(num: number): Observable<md.RootObject> {
    const topUrl = `https://www.reddit.com/r/all/top.json?limit=${num}`;

    return this.http.get<md.RootObject>(topUrl)
      .pipe(
        tap(_ => { }),
        catchError(this.handleError)
      );
  }

  /**
   * set the current clicked description after its clicked
   * @param num the number of posts
   */
  public setDesc(desc: md.DataChild) {
    this.listDesc$.next(desc);
  }

  /**
   * get the current clicked description after its clicked
   * @param num the number of posts
   */
  public getDesc(): Observable<md.DataChild> {
    return this.listDesc$.pipe(distinctUntilChanged());
  }

}
