import React, { Component } from 'react';
import movie from '../services/movie';

// components
import { Link } from 'react-router';
import Card from '../components/card.js';
import MovieBox from '../components/movie-box.js';

// styles
import styles from '../styles/movie-view.less';

export default class MovieView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      movie: {}
    }
  }
  componentDidMount() {
    this.props.startLoading();

    // fetch movie data
    movie(this.props.params.id)
     .then(data => {
       this.setState({ movie: data });
       this.setState({ loaded: true });

       this.props.stopLoading();
     });
  }
  render() {
    const classes = this.state.loaded ? `${ styles.movie } ${ styles.loaded }` : `${ styles.movie }`;

    return (
      <div className={ classes }>
      <Card>
        <MovieBox loaded={ this.state.loaded } data={ this.state.movie }></MovieBox>
      </Card>
      </div>
    );
  }
};
