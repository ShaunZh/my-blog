import { filter, shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router'
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RouterChangeService {
  constructor(private router: Router) { }

  // 这种写法无法获取到routerPath，在外层subscribe后获得到值始终为空字符串
  initRouterChange(): Observable<string> {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      shareReplay()
    ).subscribe((data: RouterEvent) => {
      let routerPath = data.url.substr(1);
      return of(routerPath)
    })
    return of('')
  }
}
