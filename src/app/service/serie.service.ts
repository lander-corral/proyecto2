import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from '../modelo/serie';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  series:Array<Serie>;
  dia:Date;
  pais:string;

  constructor(private http: HttpClient,
              ruta: ActivatedRoute) { 
    this.series = new Array();
    this.pais = 'US';
    this.dia = new Date();
    if (ruta.snapshot.queryParamMap.keys.length > 0){
      ruta.params.subscribe(
        datos => {
          this.pais = datos.pais;
          this.dia = datos.dia;
        }
      )
    }
    this.getObsSeries().subscribe(
      (datos) => datos.forEach(element => {
        if (element.image != null){
          this.series.push({"id":element.id,"url":element.url,"name":element.name,"summary":element.summary,"image":element.image.medium,"airtime":element.airtime})
        } else {
          this.series.push({"id":element.id,"url":element.url,"name":element.name,"summary":element.summary,"image":null,"airtime":element.airtime})
        }
      })
    );
    //console.log(this.series);
  }

  setDate(d:Date) {
    this.dia = d;
    this.series.length = 0;
  }

  setPais(p:string){
    this.pais = p;
    this.series.length = 0;
  }

  getObsSeries() :Observable<any>{
    return this.http.get('http://api.tvmaze.com/schedule?country=' + this.pais + '&date=' + this.dia.toISOString().substring(0,10));
  }

  getSeries(){
    return this.series;
  }

  getSerie(id:number){
    return this.series.find(serie => serie.id == id);
  }

  recargar(){
    this.getObsSeries().subscribe(
      (datos) => datos.forEach(element => {
        if (element.image != null){
          this.series.push({"id":element.id,"url":element.url,"name":element.name,"summary":element.summary,"image":element.image.medium,"airtime":element.airtime})
        } else {
          this.series.push({"id":element.id,"url":element.url,"name":element.name,"summary":element.summary,"image":null,"airtime":element.airtime})
        }
      })
    );
  }
}
