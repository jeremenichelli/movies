import React, { Component, PropTypes } from 'react';

// components
import { Link } from 'react-router';
import Icon from './icon.js';

// styles
import styles from '../styles/search-result.less';

const actionIcon = <Icon type="action"></Icon>;

export default class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  propTypes: {
    data: PropTypes.object
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.imdbID !== this.props.imdbID;
  }
  render() {
    const moviePath = `/movie/${ this.props.data.imdbID }`;

    return (
      <li className={ styles.search__result }>
        <Link to={ moviePath } className={ styles.search__result_link }>
          <h3 className={ styles.search__result_title }>
            <span>{ this.props.data.Title }</span>
            { actionIcon }
          </h3>
          <p className={ styles.search__result_year }>
            { this.props.data.Year }
          </p>
        </Link>
      </li>
    );
  }
}
