import React, { Component } from 'react';
import movie from '../../services/movie';
import Card from '../../components/card/card.js';
import MovieBox from '../../components/movie-box/movie-box.js';
import styles from './movie-view.less';

export default class MovieView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      movie: {}
    }
  }
  componentDidMount() {
    // fetch movie data
    movie(this.props.match.params.id)
      .then(data => {
        this.setState({ movie: data });
        this.setState({ loaded: true });
      });
  }
  render() {
    const classes = `${styles.movie} ${this.state.loaded ? styles.loaded : ''}`;

    return (
      <div className={classes}>
        <Card>
          <MovieBox
            loaded={this.state.loaded}
            data={this.state.movie}
          />
        </Card>
      </div>
    );
  }
};
