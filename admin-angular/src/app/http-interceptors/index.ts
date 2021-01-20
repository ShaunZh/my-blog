/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-01-18 14:54:31
 * @LastEditors: Hexon
 * @LastEditTime: 2021-01-18 14:57:40
 */

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptorService } from './auth-interceptor.service';

import { LoggingInterceptorService } from './logging-interceptor.service'
import { NoopInterceptorService } from './noop-interceptor.service'

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true }

]
