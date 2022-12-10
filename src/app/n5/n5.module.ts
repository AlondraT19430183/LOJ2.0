import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiaComponent } from './guia/guia.component';
import { VocabularioComponent } from './vocabulario/vocabulario.component';
import { DLCComponent } from './dlc/dlc.component';
import { HKKComponent } from './hkk/hkk.component';



@NgModule({
  declarations: [
    GuiaComponent,
    VocabularioComponent,
    DLCComponent,
    HKKComponent
  ],
  exports: [
    VocabularioComponent,
    DLCComponent,
    HKKComponent,
    GuiaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class N5Module { }
