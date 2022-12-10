import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoComponent } from './foro/foro.component';
import { PracticaComponent } from './practica/practica.component';
import { FtComponent } from './ft/ft.component';



@NgModule({
  declarations: [
    ForoComponent,
    PracticaComponent,
    FtComponent

  ],
  
  exports: [
    ForoComponent,
    PracticaComponent,
    FtComponent,
  ],

  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
