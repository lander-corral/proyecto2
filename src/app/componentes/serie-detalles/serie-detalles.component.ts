import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/modelo/serie';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from 'src/app/service/serie.service';

@Component({
  selector: 'app-serie-detalles',
  templateUrl: './serie-detalles.component.html',
  styleUrls: ['./serie-detalles.component.css']
})
export class SerieDetallesComponent implements OnInit {

  serie:Serie;
  constructor(ruta: ActivatedRoute,
    private servicio: SerieService,
    private router:Router) {
      ruta.params.subscribe(
        datos => {
          this.serie = this.servicio.getSerie(datos.id);
        },
        error => console.log(error)
      )
    }

  ngOnInit() {
  }

  volver(){
    this.servicio.setDate(new Date());
    this.servicio.setPais("US");
    this.servicio.recargar();
    this.router.navigate(['']);
  }

}
