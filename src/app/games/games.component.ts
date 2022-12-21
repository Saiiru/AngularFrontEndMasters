import { Component, OnInit } from '@angular/core';

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
      category: ['Souls-like', 'relaxing', 'Dark Fantasy', 'RPG'],
      percentComplete: 26,
      price: 119,
      img: 'https://preview.redd.it/bueqtztxmnj81.png?auto=webp&s=692ee8026d707e035977daf27c5ef6298e019718',
      favorite: true,
    },
  ];
  selectedGame = null;
  constructor() {}

  ngOnInit(): void {}

  selectGame(game) {
    this.selectedGame = game;
  }

  deleteGame(gameId) {
    console.log('delete game', gameId);
  }
}
