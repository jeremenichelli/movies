import React, { Component, PropTypes } from 'react';

// styles
import styles from '../styles/movie-box.less';

export default class MovieBox extends Component {
  propTypes: {
    data: PropTypes.object
  }
  render() {
    return (
      <div  className={ styles.movie__box }>
        <h3 className={ styles.movie__title }>{ this.props.data.Title }</h3>
        <dl className={ styles.movie__data }>
          <dt>Released</dt>
          <dd>{ this.props.data.Released }</dd>
          <dt>Runtime</dt>
          <dd>{ this.props.data.Runtime }</dd>
          <dt hidden={ this.props.Director === 'N/A' }>Director</dt>
          <dd hidden={ this.props.Director === 'N/A' }>{ this.props.data.Director }</dd>
          <dt>Cast</dt>
          <dd>{ this.props.data.Actors }</dd>
          <dt>IMDb Rating</dt>
          <dd>{ this.props.data.imdbRating }</dd>
        </dl>
        <img src={this.props.data.Poster } alt="" className={ styles.movie__thumb }
          hidden={ this.props.Poster === 'N/A' }/>
        <p className={ styles.movie__plot }>
          <span className={ styles.movie__plot__label }>Plot</span>
          <span>{ this.props.data.Plot }</span>
        </p>
      </div>
    );
  }
}
