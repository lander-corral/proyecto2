import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieComponent } from './componentes/serie/serie.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaSeriesComponent } from './componentes/lista-series/lista-series.component';
import { SerieDetallesComponent } from './componentes/serie-detalles/serie-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieComponent,
    ListaSeriesComponent,
    SerieDetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
