import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class RedditServiceService {

  constructor(private http: HttpClient) {
  }

  // may need oauth?
  // https://www.reddit.com/r/videos/top.json?limit=50



  /**
   *
   * @param organizationId the org id in db
   * http://int-organizations-api.geo-comm.com/swagger/#!/Organizations/V2OrganizationsByOrganizationIdGet
   */
  public getTop(num: number): Observable<any> {
    const topFiftyUrl = `https://www.reddit.com/r/videos/top.json?limit=${num}`;
    
    // const orgApiOrgUrl = `${environment.API.organizations.organizations}/${organizationId}`;
    return this.http.get<any>(topFiftyUrl)
      .pipe(
        tap(_ => { }),
        catchError(this.handleError)
      );
  }


}
