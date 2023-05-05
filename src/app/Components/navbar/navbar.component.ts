import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin=false
  constructor(private auth:AuthService){
    this.auth.isAuthenticate()
    .subscribe(
      (login)=>{
        this.isLogin = login
      }
    )
  }

  logout(){
    this.auth.logout()
  }
}
