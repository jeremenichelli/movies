import React, { Component, PropTypes } from 'react';
import { BASE_POSTER_URL } from '../../helpers/constants.js'

// styles
import styles from './movie-box.less';

export default class MovieBox extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    return this.props.data.id !== nextProps.data.id;
  }
  render() {
    const showImage = (
      this.props.data.poster_path !== undefined &&
      this.props.data.poster_path !== null
    );

    const image = (
      <img
        className={ styles.movie__thumb }
        src={ BASE_POSTER_URL + this.props.data.poster_path }
        alt=""
      />
    );

    return (
      <div className={ styles.movie__box }>
        <h3 className={ styles.movie__title }>{ this.props.data.title }</h3>
        <h4 className={ styles.movie__tagline }>{ this.props.data.tagline }</h4>
        <dl className={ styles.movie__data }>
          <dt>Released</dt>
          <dd>{ this.props.data.release_date && this.props.data.release_date.slice(0, 4) }</dd>
          <dt>Runtime</dt>
          <dd>{ this.props.data.runtime }&nbsp;min.</dd>
          <dt>User Rating</dt>
          <dd>{ this.props.data.vote_average }</dd>
        </dl>
        { showImage ? image : undefined }
        <p className={ styles.movie__plot }>
          <span className={ styles.movie__plot__label }>Plot</span>
          <span>{ this.props.data.overview }</span>
        </p>
      </div>
    );
  }
}
