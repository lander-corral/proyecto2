import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/modelo/serie';
import { SerieService } from 'src/app/service/serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {

  seriesList:Serie[];
  dia:Date;
  hoy:Date = new Date();
  pais:string;

  constructor(private servicio:SerieService) {
    this.seriesList = servicio.getSeries();
    this.dia = new Date();
    this.pais = 'US';
  }

  ngOnInit() {
  }
  
  redirigir(){
    this.dia = new Date((<HTMLInputElement> document.getElementById('dia')).value);
    this.pais = (<HTMLSelectElement> document.getElementById("pais")).value;
    this.servicio.setDate(this.dia);
    this.servicio.setPais(this.pais);
    this.servicio.recargar();
  }

}
