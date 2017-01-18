import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import App from './components/app.js';

render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute getComponent={ (location, cb) => {
          require.ensure([], () => {
            cb(null, require('./views/search-view.js').default);
          });
        }
      }/>
      <Route path="/movie/:id" getComponent={ (location, cb) => {
          require.ensure([], () => {
            cb(null, require('./views/movie-view.js').default);
          });
        }
      }/>
    </Route>
  </Router>,
  document.getElementById('app')
);
