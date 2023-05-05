import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import {HttpClientModule} from '@angular/common/http';
import { ConcatenarPipe } from './concatenar.pipe';
import { LoginComponent } from './Pages/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DetalleComponent } from './Pages/detalle/detalle.component' 
import { ListadoModule } from './listado/listado.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductoComponent } from './Components/producto/producto.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    ConcatenarPipe,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    DetalleComponent,
    ProductoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ListadoModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    NgImageSliderModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
