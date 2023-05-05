import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //private fb:FormBuilder = new FormBuilder()
  myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ){
    this.myForm = this.fb.group({
      nombre:["",[Validators.required,Validators.minLength(4)]],
      apellido:[""],
      correo:["",[Validators.required,Validators.email,Validators.minLength(6)]],
      clave:["",[Validators.required,Validators.pattern(
        '^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'
      ),Validators.minLength(6),
      Validators.maxLength(25)]],
      //confirmarClave:["",Validators.required],
    }
    )
  }

  registrarse(){
    console.log(this.myForm.value)
  }
}
