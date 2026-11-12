import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Game } from '../../models/game';

const KEY = 'sairu-angular-component-lab-games-v1';
const SAMPLES: Game[] = [
  { id: 'sample-1', title: 'Dark Souls', description: 'Registro fictício para experimentar o formulário.', percentComplete: 75, favorite: true, price: 0 },
  { id: 'sample-2', title: 'Sekiro', description: 'Outro exemplo local, sem conta ou servidor.', percentComplete: 35, favorite: false, price: 0 }
];

function valid(game: any): game is Game {
  return !!game && typeof game.id === 'string' && game.id.length > 0
    && typeof game.title === 'string' && game.title.length > 0 && game.title.length <= 100
    && typeof game.description === 'string' && game.description.length <= 600
    && typeof game.percentComplete === 'number' && Number.isFinite(game.percentComplete)
    && game.percentComplete >= 0 && game.percentComplete <= 100
    && typeof game.favorite === 'boolean';
}

@Injectable({ providedIn: 'root' })
export class GamesService {
  private changes = new BehaviorSubject<Game[]>(this.load());

  all(): Observable<Game[]> { return this.changes.asObservable(); }
  find(id: string): Observable<Game | undefined> { return of(this.changes.value.find(x => x.id === id)); }

  create(input: Game): Observable<Game> {
    const game = this.validate(input);
    const created = { ...game, id: 'game-' + Date.now() + '-' + Math.random().toString(36).slice(2, 9) };
    this.replace([...this.changes.value, created]);
    return of(created);
  }
  update(input: Game): Observable<Game> {
    const game = this.validate(input);
    if (!game.id || !this.changes.value.some(x => x.id === game.id)) return throwError(new Error('Jogo não encontrado.'));
    this.replace(this.changes.value.map(x => x.id === game.id ? game : x));
    return of(game);
  }
  delete(id: string): Observable<void> {
    this.replace(this.changes.value.filter(x => x.id !== id));
    return of(undefined);
  }
  private validate(input: Game): Game {
    const title = (input.title || '').trim();
    const description = (input.description || '').trim();
    const progress = Number(input.percentComplete);
    if (!title || title.length > 100 || !description || description.length > 600
      || !Number.isFinite(progress) || progress < 0 || progress > 100)
      throw new Error('Informe título, descrição e progresso válido entre 0 e 100.');
    return { id: input.id || '', title, description, percentComplete: progress, favorite: !!input.favorite, price: 0 };
  }
  private replace(games: Game[]): void {
    try { localStorage.setItem(KEY, JSON.stringify(games)); }
    catch (_) { /* keeps working in memory when localStorage is unavailable */ }
    this.changes.next(games);
  }
  private load(): Game[] {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw === null) return SAMPLES.map(x => ({ ...x }));
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length <= 200 && parsed.every(valid)) return parsed;
    } catch (_) { /* corrupted or disabled localStorage */ }
    return SAMPLES.map(x => ({ ...x }));
  }
}
