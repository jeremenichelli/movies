import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import App from './components/app/app.js';

// views
import SearchView from './views/search-view/search-view.js';
import MovieView from './views/movie-view/movie-view.js';

render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ SearchView }/>
      <Route path="/movie/:id" component={ MovieView } />
    </Route>
  </Router>,
  document.getElementById('app')
);
