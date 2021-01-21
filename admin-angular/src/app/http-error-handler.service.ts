import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'

export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandlerService {

  constructor() { }

  createHandleError = (serviceName = '') => {
    return <T>(operation = 'operation', result = {} as T) =>
      this.handleError(serviceName, operation, result);
  }

  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;

      console.error(`${serviceName}: ${operation} failed: ${message}`);
      return of(result);

    }
  }

}


