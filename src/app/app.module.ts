import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './shared/material.module';
import { LoaderInterceptor } from './shared/services/loader/loader.interceptor';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GamesDetailsComponent } from './games/games-details/games-details.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, GamesComponent, GamesListComponent, GamesDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
