import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'

import { AuthService } from '../auth.service'

@Injectable()
export class AuthInterceptorService {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.getAuthorizationToken();
    if (!authToken) {
      console.error('没有token信息，需要跳转到登录页面，重新登录')
    }

    // Clone the request and set the new header in one step
    const authReq = req.clone({ setHeaders: { Authorization: authToken } })

    return next.handle(authReq)
  }

}
