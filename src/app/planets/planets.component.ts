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

  constructor(private planetService: PlanetService, private _loader: LoaderService) {}

  ngOnInit() {}

  loadPlanets(){
    this.planets = []
    this.planetService.getAllPlanets().subscribe((data) => {
      this.planets = data
    })
  }

  loadStarships(){
    this.planetService.getAllStarships().subscribe((data) => {

      this.starships = data
      console.log(this.starships, data)
    })
  }
}
