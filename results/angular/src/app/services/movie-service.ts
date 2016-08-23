import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  constructor(private http: Http) {}

  public getById(id: string) {
    return this.http.get(`https://www.omdbapi.com/?type=movie&i=${id}`)
      .map(response => response.json());
  }
}
