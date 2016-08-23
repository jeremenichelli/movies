import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-box',
  styleUrls: [ './movie-box.less' ],
  templateUrl: './movie-box.html'
})

export class MovieBox {
  @Input() data: any;
}
