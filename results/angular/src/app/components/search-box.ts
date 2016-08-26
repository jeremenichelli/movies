import { Component, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../services/search-service';

@Component({
  selector: 'search-box',
  styleUrls: [ './search-box.less' ],
  templateUrl: './search-box.html'
})

export class SearchBox {
  searchTitle = '';
  searching = false;

  @Output() onSearchStarted = new EventEmitter<string>();
  @Output() onSearchFinished = new EventEmitter<any>();

  constructor(public search: SearchService) {}

  onSubmit() {
    // disable search
    this.searching = true;
    this.onSearchStarted.emit(this.searchTitle);

    this.search.getResults(this.searchTitle, 1)
      .subscribe(data => {
        // enable search again
        this.searching = false;

        this.onSearchFinished.emit(data);
      });
  }
}
