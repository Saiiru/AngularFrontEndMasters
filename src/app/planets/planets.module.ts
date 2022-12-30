import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../shared/services/loader/loader.interceptor';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';


@NgModule({
  declarations: [PlanetsComponent, PlanetListComponent, PlanetDetailComponent],
   providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    HttpClientModule
  ]
})
export class PlanetsModule { }
