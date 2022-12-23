import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planet } from '../../models/planets';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlanetService {
  constructor(private _http: HttpClient) {}

  getAllPlanets(): Observable<Planet[]> {
    return this._http.get<Planet[]>(`${environment.BASE_URL_SW}/planets/`).pipe(
      map((response: any) => {
        console.log(response);
        return response.results;
      })
    );
  }

  getAllStarships(): Observable<any> {
    return this._http.get(`${environment.BASE_URL_SW}/starships/`).pipe(
      catchError((err: any) => {
        console.warn('I want to display globaly');
        return throwError(err);
      }),
      map((response: any) => {
        console.log(response);
        return response.results;
      })
    );
  }
}
