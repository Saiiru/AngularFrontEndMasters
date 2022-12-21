import { Component } from '@angular/core';

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
}
