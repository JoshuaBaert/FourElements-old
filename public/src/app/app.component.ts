import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `    

    <app-nav></app-nav>

    <router-outlet></router-outlet>
    
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'app works!';
}
