import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/models/game';
import { GamesService } from '../shared/services/games/games.service';
import { Observable } from 'rxjs';

const emptyGame: Game = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
  price: 0,
};

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  games$: Observable<Game[]>;
  error = '';
  notice = 'Registros fictícios, somente no navegador.';
  selectedGame = emptyGame;
  originalTitle = '';
  isFavorite: boolean = false;
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.fetchGames();
  }

  fetchGames() {
    this.games$ = this.gamesService.all();
  }
  selectGame(game) {
    this.selectedGame = { ...game };
    this.originalTitle = game.title;
    this.isFavorite = game.favorite;
  }

  deleteGame(gameId) {
    this.gamesService.delete(gameId).subscribe(() => {
      this.notice = 'Jogo excluído localmente.';
      this.reset();
    });
  }

  reset() {
    this.selectGame({ ...emptyGame });
  }

  saveGame(game) {
    let message;
    try {
      if (game.id) { this.updateGame(game); message = 'Jogo atualizado.'; }
      else { this.createGame(game); message = 'Jogo criado.'; }
      this.notice = message;
      this.error = '';
      this.reset();
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Dados inválidos.';
    }
    return message;
  }

  updateGame(game) {
    this.gamesService.update(game).subscribe();
  }

  createGame(game) {
    this.gamesService.create(game).subscribe();
  }
}
