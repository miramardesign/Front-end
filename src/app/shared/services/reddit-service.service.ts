import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import { HandleErrorMixin, Activatable, Mixin } from '../../shared/mixins/mixins';

/**
 * service for interacting with reddit api:
 * https://www.reddit.com/dev/api
 */

@Injectable({
  providedIn: 'root'
})
@Mixin([Activatable, HandleErrorMixin])

export class RedditServiceService {
  handleError: (err: HttpErrorResponse) => Observable<any>;

  constructor(private http: HttpClient) {
  }

  // may need oauth?
  // https://www.reddit.com/r/videos/top.json?limit=50


  /**
   *
   * @param num the number of posts
   */
  public getTop(num: number): Observable<any> {
    const topUrl = `https://www.reddit.com/r/all/top.json?limit=${num}`;

    return this.http.get<any>(topUrl)
      .pipe(
        tap(_ => { }),
        catchError(this.handleError)
      );
  }

}
