import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../shared/services/planets/planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit {
  constructor(private planetService: PlanetService) {}

  ngOnInit() {}
}
