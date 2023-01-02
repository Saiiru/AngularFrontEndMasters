import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth-guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'games', component: GamesComponent },
  {
    path: 'starwars/planets',
    loadChildren: () =>
      import('./planets/planets.module').then((m) => m.PlanetsModule),
    canActivate: [AuthGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
