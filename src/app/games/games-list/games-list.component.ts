import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/shared/models/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {
  @Input() games: Game[] = []
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
