import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-result',
  styleUrls: [ './search-result.less' ],
  templateUrl: './search-result.html'
})

export class SearchResult {
  @Input() data: any;
  moviePath: string;

  ngOnInit() {
    this.moviePath = `/movie/${ this.data.imdbID }`;
  }
}
