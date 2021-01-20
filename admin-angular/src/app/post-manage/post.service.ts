import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

export interface PageParams {
  data: {},
  page: {
  }

}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpService) { }

  create() {

  }

  delete() {

  }

  update() {

  }


  query(params: PageParams) {
    this.http.request('/url', 'post', params)
  }
}
