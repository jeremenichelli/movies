import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { rootRouterConfig } from "./app.routes";
import { AppComponent } from "./app";
import { SearchView  } from './views/search-view';
import { MovieView  } from './views/movie-view';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [ AppComponent, SearchView, MovieView ],
  imports: [ BrowserModule, HttpModule, RouterModule.forRoot(rootRouterConfig) ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
