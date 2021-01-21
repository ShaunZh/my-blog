import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const baseUrl = 'http://127.0.0.1:7001'

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  request<R>(url: string, method: 'post' | 'get' | 'put' | 'delete', data?: any, options?: any) {

    let optionsBk = options || {}
    let newUrl = url;
    if (url.indexOf('http') !== 0) {
      newUrl = baseUrl + url
    }
    console.log('request: ', data)
    return this.httpClient.request<R>(method, newUrl, {
      body: data || {},
      ...{ optionsBk }
    })
  }
}
