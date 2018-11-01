import React, { Component } from 'react';
import search from '../../services/search';

import Card from '../../components/card/card.js';
import SearchBox from '../../components/search-box/search-box.js';
import SearchResult from '../../components/search-result/search-result.js';

import styles from './search-view.less';
import { connect } from 'react-redux';

const renderResult = (result) => {
  if (result !== undefined) {
    return (
      <SearchResult
        key={result.id}
        data={result}
      />
    );
  }
}

class SearchView extends Component {
  constructor(props) {
    super(props);

    this.getMoreResults = this.getMoreResults.bind(this);
  }

  getMoreResults(e) {
    e.preventDefault();
    const {
      searchTitle,
      page,
      startLoading,
      stopLoading,
      addResults
    } = this.props

    startLoading()

    search(searchTitle, page + 1)
      .then(data => {
        addResults(data.results);
        stopLoading()
      });
  }

  render() {
    const { searchTitle, results, total } = this.props
    const showNoResults = !(searchTitle !== '' && results !== null && results.length === 0)
    const showMoreResults = !(results && results.length && (results.length < total))

    return (
      <div>
        <Card hollow>
          <SearchBox />
        </Card>
        <Card hollow>
          <p hidden={!(results && results.length)}>
            <em>Search results for &laquo;{searchTitle}&raquo;</em>
          </p>
          <p hidden={showNoResults}>
            <em>No search results for &laquo;{searchTitle}&raquo;</em>
          </p>
          <ul className={styles.search__results}>{results && results.map(renderResult)}</ul>
        </Card>
        <Card hollow hidden={showMoreResults}>
          <a
            href="#"
            className={styles.more}
            onClick={this.getMoreResults}
          >
            Load more results
          </a>
        </Card>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  searchTitle: state.searchTitle,
  results: state.results.data,
  total: state.results.total,
  page: state.results.page
})

const mapDispatchToProps = (dispatch) => ({
  startLoading: () => dispatch({ type: 'START_LOADING' }),
  stopLoading: () => dispatch({ type: 'STOP_LOADING' }),
  addResults: (results) => dispatch({ type: 'ADD_RESULTS', results })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView)
