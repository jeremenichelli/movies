import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import App from './components/app/app.js';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
