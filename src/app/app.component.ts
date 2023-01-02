import { Component } from '@angular/core';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Staem';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/games', icon: 'view_list', title: 'Games' },
    { path: '/planets', icon: 'view_list', title: 'Planets' },
  ];

  examples = [
    {
      path: '/starwars/planets',
      icon: 'system_update_alt',
      title: 'Star Wars Planets',
    },
    {
      path: '/starwars/starships',
      icon: 'system_update_alt',
      title: 'Star Wars Starships',
    },
    // { path: '/examples/child', icon: 'face', title: 'Child Routes' },
    // { path: '/examples/protected', icon: 'vpn_key', title: 'Protected Routes' },
    // {
    //   path: '/examples/lazy',
    //   icon: 'swap_vertical_circle',
    //   title: 'Lazy Module',
    // },
    // { path: '/examples/create', icon: 'add_box', title: 'Dynamic Components' },
    // {
    //   path: '/examples/input',
    //   icon: 'dashboard_customize',
    //   title: 'Custom Input',
    // },
  ];
  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
}
