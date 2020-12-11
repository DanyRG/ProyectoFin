import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {​​ FormsModule }​​ from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'

//componentes

import {  LibrosComponent   } from './componentes/libros/libros.component'
import {  HomeComponent   } from './componentes/shared/home/home.component'
import {  NavbarComponent   } from './componentes/shared/navbar/navbar.component'
import {  PrestamosComponent   } from './componentes/prestamos/prestamos.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { AgregarusrComponent } from './componentes/agregarusr/agregarusr.component'

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    PrestamosComponent,
    HomeComponent,
    NavbarComponent,
    AcercadeComponent,
    CategoriaComponent,
    AgregarusrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
