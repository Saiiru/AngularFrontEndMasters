import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games = [
    { title: 'Elden Ring' },
    { title: 'The witcher' },
    { title: 'Shadow Warrior' },
    { title: 'Dead Space' },
    { title: 'Dark Souls' },
    { title: 'Sekiro' },
    { title: 'Doom' },
    { title: 'Outer Worlds' },
  ];
  selectedGame = null;

  constructor() {}

  ngOnInit(): void {}

  selectGame(game) {
    this.selectedGame = game;
  }
}
