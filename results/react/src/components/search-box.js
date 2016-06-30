import React, { Component, PropTypes } from 'react';
import search from '../services/search';

// components
import Icon from './icon.js';

// styles
import styles from '../styles/search-box.less';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
        searchTitle: '',
        searching: false
    };

    // bind events
    this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  propTypes: {
    resetParentData: PropTypes.func,
    setParentTitle: PropTypes.func,
    setParentResults: PropTypes.func
  }
  handleChange(e) {
    this.setState({ searchTitle: e.target.value });
  }
  onSearch(e) {
    e.preventDefault();
    this.props.resetParentData();

    this.setState({ searching: true });
    this.props.startLoading();

    search(this.state.searchTitle)
      .then(data => {
        const results = data.Search && data.Search.length ? data.Search : [];

        // enable search again
        this.setState({ searching: false });

        // pass data to parent component
        this.props.setParentTitle(this.state.searchTitle);
        this.props.setParentResults(results, data.totalResults);

        this.props.stopLoading();
      });
  }
  render() {
    return (
      <form action="?" className={ styles.search__form } onSubmit={ this.onSearch }>
        <input type="text" placeholder="Search" className={ styles.search__input }
          value={ this.props.searchTitle } onChange={ this.handleChange }/>
        <button type="submit" className={ styles.search__button }
          disabled={ this.state.searching || this.state.searchTitle === '' }>
          <Icon className={ styles.icon } type="search"></Icon>
        </button>
      </form>
    );
  }
}
