import { Component, Input,Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Producto } from 'src/app/Interfaces/Productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input()
  data!:Producto

  @Output()
  reload=new EventEmitter()

  isLogin=false

  constructor(private auth:AuthService){
    this.auth.isAuthenticate()
    .subscribe(
      (login)=>{
        this.isLogin = login
      }
    )
  }
  eliminar(){ 
    this.reload.emit()
  }
}
