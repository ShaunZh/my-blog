import { Observable } from 'rxjs'
import { map, shareReplay, filter } from 'rxjs/operators';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-angular';

  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )
  activeRoutePath: string
  constructor(
    private activedRoutePath: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      shareReplay()
    ).subscribe((data: RouterEvent) => {
      let routerPath = data.url.substr(1);
      this.activeRoutePath = routerPath
      console.log('t', data)
    })
  }
}
