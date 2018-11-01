import React, { Component } from 'react';

// components
import { Link, Route } from 'react-router-dom';
import LoadingBar from '../loading-bar/loading-bar.js';
import Icon from '../icon/icon.js';

// views
import SearchView from '../../views/search-view/search-view.js';
import MovieView from '../../views/movie-view/movie-view.js';

// styles
import styles from './app.less';

const BackIcon = <Icon type="back"></Icon>;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <div className={styles.app}>
        <header>
        <h1>Movies</h1>
          <LoadingBar hidden={!this.state.loading}></LoadingBar>
          <Route
            exact
            path="/"
            component={() => <h2>Look up fast information about your favorite titles</h2>}
          />
          <Route
            path="/movie/"
            component={() => (
              <h2>
                <Link to="/" className={styles.back}>{BackIcon} Back to Search</Link>
              </h2>
            )}
          />
        </header>
        <main className="view">
          <Route
            exact
            path="/"
            component={() => <SearchView />}
          />
          <Route
            path="/movie/:id"
            component={({ match }) => <MovieView match={match} />}
          />
        </main>
      </div>
    );
  }
};
