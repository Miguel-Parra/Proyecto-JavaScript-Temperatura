import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  rutaPaginaInicio;
  rutaPaginaLugares;
  rutaPaginaTemperaturas;
  idUsuario;
  
  
  constructor(private readonly _router:Router,
    private readonly _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;

    parametros$
    .subscribe(
      (parametros)=>{
        this.idUsuario = parametros.idUsuario;
        console.log('valor',this.idUsuario);
      }
    )

  }

}
