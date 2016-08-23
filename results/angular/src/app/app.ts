import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector   : 'app',
  styleUrls: [ './app.less' ],
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  isMovieView: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMovieView = event.url.indexOf('movie') > -1;
      }
    });
  }
}
