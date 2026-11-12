import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isNarrow = typeof window !== 'undefined' && window.innerWidth < 800;
  @HostListener('window:resize') onResize() { this.isNarrow = window.innerWidth < 800; }
  title = 'Component Lab';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/games', icon: 'view_list', title: 'Games' },
    { path: '/starwars/planets', icon: 'public', title: 'SWAPI Planets' },
  ];

}
