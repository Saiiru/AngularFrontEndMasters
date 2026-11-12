import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/services/loader/loader.service';
import { PlanetService } from '../shared/services/planets/planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit {
  planets: any[] = [];
  starships: any[] = [];

  loading$ = this._loader.isLoading$;
  error = '';

  constructor(private planetService: PlanetService, private _loader: LoaderService) {}

  ngOnInit() { this.loadPlanets(); }

  loadPlanets(){
    this.planets = []
    this.error = '';
    this.planetService.getAllPlanets().subscribe(
      data => this.planets = data,
      () => this.error = 'Não foi possível consultar os planetas. Tente novamente.'
    );
  }

  loadStarships(){
    this.starships = [];
    this.error = '';
    this.planetService.getAllStarships().subscribe(
      data => this.starships = data,
      () => this.error = 'Não foi possível consultar as naves. Tente novamente.'
    );
  }
}
