import React, { Component, PropTypes } from 'react';

// components
import { Link } from 'react-router';
import Icon from '../icon/icon.js';

// styles
import styles from './search-result.less';

const actionIcon = <Icon type="action"></Icon>;

export default class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.data.id !== this.props.data.id;
  }
  render() {
    const moviePath = `/movie/${ this.props.data.id }`;

    return (
      <li className={ styles.search__result }>
        <Link to={ moviePath } className={ styles.search__result_link }>
          <h3 className={ styles.search__result_title }>
            <span>{ this.props.data.title }</span>
            { actionIcon }
          </h3>
          <p className={ styles.search__result_year }>
            { this.props.data.release_date.slice(0, 4) }
          </p>
        </Link>
      </li>
    );
  }
}

SearchResult.defaultProps = {
  data: {}
};

SearchResult.propTypes = {
  data: PropTypes.object
};
