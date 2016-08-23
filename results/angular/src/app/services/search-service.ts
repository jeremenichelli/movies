import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  constructor(private http: Http) {}

  public getResults(title: string, page: number) {
    return this.http.get(`https://www.omdbapi.com/?type=movie&s=${title}&page=${page}`)
      .map(response => response.json());
  }
}
