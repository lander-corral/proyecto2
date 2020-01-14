import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaSeriesComponent } from './componentes/lista-series/lista-series.component';
import { SerieDetallesComponent } from './componentes/serie-detalles/serie-detalles.component';


const routes: Routes = [
  {path: '', component: ListaSeriesComponent},
  {path: "detalle/:id", component:SerieDetallesComponent},
  {path: '**', redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
