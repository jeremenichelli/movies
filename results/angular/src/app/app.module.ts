import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { rootRouterConfig } from './app.routes';
import { SearchService } from './services/search-service';
import { MovieService } from './services/movie-service';

import { AppComponent } from "./app";

import { LoadingBar } from './components/loading-bar';
import { Card } from './components/card';
import { SearchBox } from './components/search-box';
import { SearchResult } from './components/search-result';
import { MovieBox } from './components/movie-box';

import { SearchView } from './views/search-view';
import { MovieView } from './views/movie-view';


@NgModule({
  declarations: [ AppComponent, SearchView, MovieView, LoadingBar, Card, SearchBox, SearchResult, MovieBox ],
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig) ],
  providers: [ SearchService, MovieService, { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
