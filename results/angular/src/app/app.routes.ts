import { Routes } from '@angular/router';
import { SearchView } from './views/search-view';
import { MovieView } from './views/movie-view';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'search', terminal: true },
  { path: 'search', component: SearchView },
  { path: 'movie/:id', component: MovieView }
];
