import React, { Component } from 'react';
import search from '../../services/search';
import Icon from '../icon/icon.js';
import styles from './search-box.less';

const searchIcon = <Icon className={ styles.icon } type="search"></Icon>;

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTitle: '',
      searching: false
    };

    this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTitle: e.target.value });
  }

  onSearch(e) {
    e.preventDefault();
    this.props.resetParentData();

    this.setState({ searching: true });

    search(this.state.searchTitle)
      .then(data => {
        this.setState({ searching: false });
        this.props.setParentTitle(this.state.searchTitle);
        this.props.setParentResults(data.results, data.total_results);
      });
  }

  render() {
    return (
      <form action="?" className={styles.search__form} onSubmit={this.onSearch}>
        <input
          type="text"
          placeholder="Search"
          className={styles.search__input}
          value={this.props.searchTitle} onChange={this.handleChange}
        />
        <button
          type="submit"
          className={styles.search__button}
          disabled={this.state.searching || this.state.searchTitle === ''}>
          {searchIcon}
        </button>
      </form>
    );
  }
};
