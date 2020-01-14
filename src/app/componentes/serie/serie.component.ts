import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie } from 'src/app/modelo/serie';
import { SerieService } from 'src/app/service/serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  @Input() serie:Serie;
  @Input() id:number;

  constructor(servicio:SerieService) { 
    /*this.http.get('http://api.tvmaze.com/schedule?country=US&date=' + new Date().toISOString().substring(0,10)).subscribe(
      (datos) => {
        console.log(datos);
      },
      (error) => {
        console.log('ERROR: ' + error.status + " - " + error.message);
      }
    );*/
    this.serie = servicio.getSerie(this.id);
  }

  ngOnInit() {
  }

}
