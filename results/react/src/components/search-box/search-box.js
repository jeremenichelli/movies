import React, { Component } from 'react';
import search from '../../services/search';
import Icon from '../icon/icon.js';
import styles from './search-box.less';

const searchIcon = <Icon className={ styles.icon } type="search"></Icon>;

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      searching: false
    };

    this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  onSearch(e) {
    e.preventDefault();

    const { startLoading, stopLoading, resetResults, setResults, setSearchTitle } = this.props
    const { query } = this.state
    
    resetResults()
    startLoading()
    this.setState({ searching: true });

    search(query)
      .then(data => {
        setSearchTitle(query)
        setResults(data.results, data.total_results)
        stopLoading()
        this.setState({ searching: false });
      });
  }

  render() {
    return (
      <form action="?" className={styles.search__form} onSubmit={this.onSearch}>
        <input
          type="text"
          placeholder="Search"
          className={styles.search__input}
          value={this.props.query} onChange={this.handleChange}
        />
        <button
          type="submit"
          className={styles.search__button}
          disabled={this.state.searching || this.state.query === ''}>
          {searchIcon}
        </button>
      </form>
    );
  }
};

SearchBox.defaultProps = {
  startLoading: f => f,
  stopLoading: f => f,
  resetResults: f => f,
  setSearchTitle: f => f,
  setResults: f => f,
}

export default SearchBox
