import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planet } from '../../models/planets';

@Injectable({ providedIn: 'root' })
export class PlanetService {
  constructor(private _http: HttpClient) {}

  getAllPlanets(): Observable<Planet> {
    return this._http.get<Planet>(`${environment.BASE_URL_SW}/planets/1/`);
  }
}
