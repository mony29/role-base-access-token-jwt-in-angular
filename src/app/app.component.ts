import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'role-base-access-control-jwt';

  role="";

  constructor(private authService: AuthService) {
    // this.role = authService.getUserRole()
    // authService.getUserRole()
   }

  isLoggedIn!: boolean;

  checkLoggedInUser(){
    this.isLoggedIn = this.authService.isLoggedIn();
    this.role = this.authService.getUserRole()
  }

  logout() {
    this.authService.logout();
  }
}
