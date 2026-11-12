import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Planet } from '../../models/planets';

interface Page<T> { results: T[]; next: string | null; }

@Injectable({ providedIn: 'root' })
export class PlanetService {
  constructor(private http: HttpClient) {}
  getAllPlanets(): Observable<Planet[]> {
    return this.pages<Planet>('planets');
  }
  getAllStarships(): Observable<any[]> {
    return this.pages<any>('starships');
  }

  /** SWAPI pagination is finite, verified for host/path and limited to 20 pages. */
  private pages<T>(resource: 'planets' | 'starships'): Observable<T[]> {
    const root = environment.BASE_URL_SW + '/' + resource + '/';
    return this.fetchPage<T>(root, root, 0);
  }

  private fetchPage<T>(url: string, root: string, page: number): Observable<T[]> {
    if (page >= 20 || !url.startsWith(root) ||
      (url.length > root.length && !url.slice(root.length).startsWith('?'))) {
      return throwError(new Error('Resposta de paginação inesperada.'));
    }
    return this.http.get<Page<T>>(url).pipe(switchMap(response => {
      if (!response || !Array.isArray(response.results)) {
        return throwError(new Error('Resposta inválida da SWAPI.'));
      }
      if (!response.next) return of(response.results);
      return this.fetchPage<T>(response.next, root, page + 1).pipe(
        map(rest => response.results.concat(rest))
      );
    }));
  }
}
