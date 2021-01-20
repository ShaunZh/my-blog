import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  request<T>(url: string, method: 'post' | 'get' | 'put' | 'delete', data?: T, options?: any) {

    let optionsBk = options || {}
    return this.httpClient.request(method, url, {
      body: data || {},
      ...{ optionsBk }
    })
  }

}
