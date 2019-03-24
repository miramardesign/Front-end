import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { throwError } from 'rxjs';

// Activatable Mixin
//  https://medium.com/@dmyl/mixins-as-class-decorators-in-typescript-angular2-8e09f1bc1f02
export class Activatable {
   isActive: boolean;
   activate() {
      this.isActive = true;
   }
   deactivate() {
      this.isActive = false;
   }
}

export function Mixin(baseCtors: Function[]) {
   return function (derivedCtor: Function) {
      baseCtors.forEach(baseCtor => {
         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
         });
      });
   };
}


export class HandleErrorMixin {

   /**
    * moved from https service for reuse
    * @param err the error
    */
   handleError(err: HttpErrorResponse): Observable<any> {

      // Angular will throw an error if the request fails or if the
      // response body cannot be parsed.
      // This is particularly bad because HTTP error responses (401, 403, 404)
      // generally don't contain a body to parse.
      if (err.error) {
         // The request itself failed, throw the error.
         return throwError(err.error);
      }

      if (err.ok) {
         // The request succeeded but we failed to parse the body.
         return throwError(err);
      }

      // If we reach this point, the request succeeded but returned an error
      // response. Swallow the error for now.
      return of(err);
   }
}
