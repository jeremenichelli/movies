import React, { Component } from 'react';
import { connect } from 'react-redux'
import movie from '../../services/movie';
import Card from '../../components/card/card.js';
import MovieBox from '../../components/movie-box/movie-box.js';
import styles from './movie-view.less';

class MovieView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      movie: {}
    }
  }
  componentDidMount() {
    const { match, startLoading, stopLoading } = this.props

    startLoading()

    // fetch movie data
    movie(match.params.id)
      .then(data => {
        stopLoading()
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

const mapDispatchToProps = (dispatch) => ({
  startLoading: () => dispatch({ type: 'START_LOADING' }),
  stopLoading: () => dispatch({ type: 'STOP_LOADING' })
})

export default connect(null, mapDispatchToProps)(MovieView)
