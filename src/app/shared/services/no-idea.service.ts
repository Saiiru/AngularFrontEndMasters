import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoIdeaService {
  BASE_URL = 'https://swapi.dev/api/';
  constructor(private _http: HttpClient) {}

  getResource(resource) {
    return this._http.get(`${this.BASE_URL}/${resource}/`);
  }
}
