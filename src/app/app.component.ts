import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div>
      <div routerLink="login">Login</div>
      <div routerLink="register">Register</div>
    </div>
    <div>
      <span>Logout</span>
    </div>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'MG_ToDo';

  logout(){
    console.log('Logout');
  }

}
