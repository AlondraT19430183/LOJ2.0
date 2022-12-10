import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarInicioComponent } from './navbar-inicio/navbar-inicio.component';
import { NavbarContenidoComponent } from './navbar-contenido/navbar-contenido.component';
import { NavbarSComponent } from './navbar-s/navbar-s.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarInicioComponent,
    NavbarContenidoComponent,
    NavbarSComponent
  ],
  exports:[
    NavbarSComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavbarModule { }
