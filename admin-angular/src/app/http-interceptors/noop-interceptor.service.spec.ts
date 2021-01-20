/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NoopInterceptorService } from './noop-interceptor.service';

describe('Service: NoopInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoopInterceptorService]
    });
  });

  it('should ...', inject([NoopInterceptorService], (service: NoopInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
