import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app/app.js';
import reducers from './reducers'

const store = createStore(reducers)

// store.subscribe(() => console.log(store.getState()))

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
