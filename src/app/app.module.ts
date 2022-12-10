import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { N5Module } from './n5/n5.module';
import { NavbarModule } from './navbar/navbar.module';
import { PaginasModule } from './paginas/paginas.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NavbarModule,
    PaginasModule,
    N5Module,
    AppRoutingModule
  ],
  exports:[
    NavbarModule,
    PaginasModule,
    N5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
