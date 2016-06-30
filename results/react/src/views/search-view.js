import React, { Component } from 'react';
import search from '../services/search';

// components
import { Link } from 'react-router';
import LoadingBar from '../components/loading-bar.js';
import Card from '../components/card.js';
import SearchBox from '../components/search-box.js';
import SearchResult from '../components/search-result.js';

// styles
import styles from '../styles/search-view.less';

let persistData = null;

export default class SearchView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageResults: 1,
      results: [],
      searchTitle: '',
      totalResults: 0,
    };

    // bind event context
    this.resetData = this.resetData.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setResults = this.setResults.bind(this);
    this.getMoreResults = this.getMoreResults.bind(this);
  }
  resetData() {
    this.setState({ results: [] });
    this.setState({ pageResults: 1 });
  }
  setTitle(title) {
    this.setState({ searchTitle: title});
  }
  setResults(results, total) {
    this.setState({ results: results });
    this.setState({ totalResults: total });
  }
  getMoreResults(e) {
    e.preventDefault();

    this.props.startLoading();

    search(this.state.searchTitle, this.state.pageResults + 1)
      .then(data => {
        const results = this.state.results.concat(data.Search);

        this.setState({ results });
        this.setState({ pageResults: ++this.state.pageResults });

        this.props.stopLoading();
      });
  }
  componentWillUnmount() {
    persistData = {
      results: this.state.results,
      totalResults: this.state.totalResults
    };
  }
  componentWillMount() {
    if (persistData) {
      this.setState({ results: persistData.results });
      this.setState({ totalResults: persistData.totalResults });
    }
  }
  render() {
    const results = this.state.results;

    return (
      <div>
        <Card hollow>
          <SearchBox
            resetParentData={ this.resetData }
            setParentTitle={ this.setTitle }
            setParentResults={ this.setResults }
            startLoading={ this.props.startLoading }
            stopLoading={ this.props.stopLoading }
          ></SearchBox>
        </Card>

        <Card hollow>
          <p hidden={ !this.state.results.length }>
            <em>Search results for &laquo;{ this.state.searchTitle }&raquo;</em>
          </p>
          <ul className={ styles.search__results }>
          {
            results.map((result, index) => {
              if (result && result.imdbID ) {
                const id = `${ result.imdbID }-${ index }`;

                return (
                  <SearchResult key={ id } data={ result }></SearchResult>
                );
              }
            })
          }
          </ul>
        </Card>

        <Card hollow
          hidden={ !(this.state.results.length < this.state.totalResults && this.state.results.length) }>
          <a href="#" className={ styles.more } onClick={ this.getMoreResults }>
            Load more results</a>
        </Card>
      </div>
    );
  }
};
