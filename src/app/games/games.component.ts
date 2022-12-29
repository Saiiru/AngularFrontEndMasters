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
  games$: Observable<Game[]>
  selectedGame = emptyGame;
  originalTitle = '';
  isFavorite: boolean = false;
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.fetchGames();
  }

  fetchGames() {
    this.games$ = this.gamesService.all()
    // this.gamesService.all().subscribe((data: any) => (this.games = data));
  }
  selectGame(game) {
    this.selectedGame = { ...game };
    this.originalTitle = game.title;
    this.isFavorite = game.favorite;
  }

  deleteGame(gameId) {
    this.gamesService.delete(gameId).subscribe((result) => this.fetchGames());
    console.log('delete game', gameId);
  }

  reset() {
    this.selectGame({ ...emptyGame });
  }

  saveGame(game) {
    let message;
    console.log(game.id, game);
    if (game.id) {
      message = 'game updated';
      this.updateGame(game);
      return message;
    } else {
      message = 'game created';
      this.createGame(game);
      return message;
    }
  }

  updateGame(game) {
    this.gamesService.update(game).subscribe((result) => this.fetchGames());
  }

  createGame(game) {
    this.gamesService.create(game).subscribe((result) => this.fetchGames());
  }
}
