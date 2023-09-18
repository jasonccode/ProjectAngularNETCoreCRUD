import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { AgregarEditarComentariosComponent } from './components/agregar-editar-comentarios/agregar-editar-comentarios.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

const routes: Routes = [
  { path: '', component: ListComentariosComponent},
  { path: 'agregar', component: AgregarEditarComentariosComponent},
  { path: 'editar/:id', component: AgregarEditarComentariosComponent},
  { path: 'ver/:id', component: VerComentarioComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
