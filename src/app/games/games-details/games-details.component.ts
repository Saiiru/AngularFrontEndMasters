import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/shared/models/game';

@Component({
  selector: 'app-games-details',
  templateUrl: './games-details.component.html',
  styleUrls: ['./games-details.component.scss'],
})
export class GamesDetailsComponent {
  selectedGame: Game;
  originalTitle = ''

  @Output() saved = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() set game(value){
    if(!value) return;
    this.selectedGame = { ...value}
    this.originalTitle = this.selectedGame.title
  }
}
