import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsComponent } from './planets.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

const routes: Routes = [{
  path: '',
  component: PlanetsComponent,
  children: [
    {path: 'list', component: PlanetListComponent},
    {path: 'details/:id', component: PlanetDetailComponent}
]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
