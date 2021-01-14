/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouterChangeService } from './routerChange.service';

describe('Service: RouterChange', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterChangeService]
    });
  });

  it('should ...', inject([RouterChangeService], (service: RouterChangeService) => {
    expect(service).toBeTruthy();
  }));
});
