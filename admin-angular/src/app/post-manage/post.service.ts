import { Observable } from 'rxjs'
import { Post } from './post.d';
import { HandleError, HttpErrorHandlerService } from './../http-error-handler.service';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { catchError } from 'rxjs/operators';

export interface PageParams {
  data: {
    keywords?: string;
    tag?: string;
    createStartDate?: string;
    createEndDate?: string;
    updateStartDate?: string;
    updateEndDate?: string;
  },
  page: {
    pageSize: number;
    pageIndex: number;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private handleError: HandleError;

  constructor(
    private http: HttpService,
    httpHandlerService: HttpErrorHandlerService
  ) {
    this.handleError = httpHandlerService.createHandleError('PostService')
  }

  createPost() {

  }

  deletePost() {

  }

  updatePost() {

  }


  getPosts(params: PageParams): Observable<Post[]> {
    return this.http.request<Post[]>('/post/index', 'post', params)
      .pipe(
        catchError(this.handleError<Post[]>('getPosts', []))
      )
  }
}
