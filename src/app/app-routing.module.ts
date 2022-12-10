import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { FtComponent } from './paginas/ft/ft.component';
import { DLCComponent } from './n5/dlc/dlc.component';
import { GuiaComponent } from './n5/guia/guia.component';
import { HKKComponent } from './n5/hkk/hkk.component';
import { VocabularioComponent } from './n5/vocabulario/vocabulario.component';
import { ForoComponent } from './paginas/foro/foro.component';
import { PracticaComponent } from './paginas/practica/practica.component';

const routes: Routes = [
  { path: 'ft'    , component: FtComponent, canActivate:[AuthGuard] },
  { path: 'home'    , component: HomeComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  {path:'dlc', component:DLCComponent},
  {path:'guia',component:GuiaComponent},
  {path:'hkk',component:HKKComponent},
  {path:'vocabulario',component:VocabularioComponent},
  {path:'foro',component:ForoComponent},
  {path:'practica',component:PracticaComponent},
  {path:'ft',component:FtComponent},

  { path: '**', redirectTo: 'registro' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
