import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm:FormGroup
  constructor(private auth:AuthService, private fb:FormBuilder){
    this.myForm = this.fb.group({
      correo:["",[Validators.required,Validators.email]],
      clave:["",[Validators.required]],
    }
    )
  }

  login(){
    this.auth.authenticate()
  }
}
