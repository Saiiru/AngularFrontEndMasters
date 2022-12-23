import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/models/game';

const emptyGame: Game = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
  price: 0
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games = [
    {
      id: 1,
      title: 'Elden Ring',
      description: "['Souls-like', 'relaxing', 'Dark Fantasy', 'RPG']",
      percentComplete: 26,
      price: 119,
      favorite: true,
    },
    {
      id: 2,
      title: 'Dark Souls',
      description: "['Souls-like', 'relaxing', 'Dark Fantasy', 'RPG']",
      percentComplete: 87,
      price: 119,
      favorite: false,
    },
  ];
  selectedGame = emptyGame;
  originalTitle = '';
  isFavorite: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  selectGame(game) {
    this.selectedGame = { ...game };
    this.originalTitle = game.title;
    this.isFavorite = game.favorite
  }

  deleteGame(gameId) {
    console.log('delete game', gameId);
  }

  reset() {
    this.selectGame({ ...emptyGame });
  }

  saveGame(game) {
    console.log('savedGame', game);
  }
}
