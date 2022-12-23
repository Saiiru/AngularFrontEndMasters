import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../shared/services/loader/loader.interceptor';


@NgModule({
  declarations: [PlanetsComponent],
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
