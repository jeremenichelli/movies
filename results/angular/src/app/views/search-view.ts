import { Component, Output } from '@angular/core';
import { SearchService } from '../services/search-service';

let bufferData;

@Component({
  selector: 'search-view',
  styleUrls: [ './search-view.less' ],
  templateUrl: './search-view.html'
})

export class SearchView {
  searchTitle = '';
  page = 1;
  results = [];
  totalResults = 0;
  noResults = true;
  searching = false;

  constructor(public search: SearchService) {}

  // capture child events
  onSearchStarted(title: string) {
    this.searching = true;

    this.searchTitle = title;
    this.page = 1;
    this.results = [];
  }

  onSearchFinished(data) {
    this.results = data.Search || [];
    this.noResults = !!this.results.length;
    this.totalResults = data.totalResults;

    this.searching = false;
  }

  getMoreResults(e) {
    e.preventDefault();

    this.searching = true;

    this.search.getResults(this.searchTitle, ++this.page)
      .subscribe(data => {
        this.results = this.results.concat(data.Search);
        this.searching = false;
      });
  }

  ngOnInit() {
    const buffered = JSON.parse(sessionStorage.getItem('search-data'));

    if (buffered) {
      this.searchTitle = buffered.searchTitle
      this.page = buffered.page;
      this.results = buffered.results
      this.totalResults = buffered.totalResults;
      this.noResults = buffered.noResults;
    }
  }

  ngOnDestroy() {
    bufferData = {
      searchTitle: this.searchTitle,
      page: this.page,
      results: this.results,
      totalResults: this.totalResults,
      noResults: this.noResults
    }

    sessionStorage.setItem('search-data', JSON.stringify(bufferData))
  }
}
