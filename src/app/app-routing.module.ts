import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { PrestamosComponent } from './componentes/prestamos/prestamos.component';
import { HomeComponent } from './componentes/shared/home/home.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component'
import { AgregarusrComponent } from './componentes/agregarusr/agregarusr.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'agregarlibros',component: LibrosComponent},
  {path: 'agregarusuarios', component: AgregarusrComponent},
  {path: 'prestamos', component: PrestamosComponent},
  {path: 'acerca', component: AcercadeComponent},
  {path: 'categoria', component: CategoriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
