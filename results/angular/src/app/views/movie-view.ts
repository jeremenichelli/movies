import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie-service';

@Component({
  selector: 'movie-view',
  styleUrls: [ './movie-view.less' ],
  templateUrl: './movie-view.html'
})

export class MovieView {
  loaded: boolean;
  data: any;

  constructor(private route: ActivatedRoute, public movie: MovieService) {}

  ngOnInit() {
    this.loaded = false;

    this.route.params.subscribe(params => {
      this.movie.getById(params['id'])
        .subscribe(data => {
          this.data = data;
          this.loaded = true;
        });
    });
  }
}
