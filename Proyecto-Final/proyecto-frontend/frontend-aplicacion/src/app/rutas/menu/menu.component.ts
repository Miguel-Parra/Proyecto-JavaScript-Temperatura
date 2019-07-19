import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NombreUsuarioService } from 'src/app/servicios/nombreUsuario/nombre-usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutaPaginaInicio;
  rutaPaginaLugares;
  rutaPaginaTemperaturas;
  nombreUsuario;
  
  
  constructor(private readonly _router:Router,
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _nombreService: NombreUsuarioService) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;

    parametros$
    .subscribe(
      (parametros)=>{
        this.nombreUsuario = parametros.nombre;
        this._nombreService.conseguirNombre(this._nombreService);
        this.rutaPaginaInicio = ['/menu',this.nombreUsuario,'slider'];
        this.rutaPaginaLugares = ['/menu',this.nombreUsuario,'lugares']
        this.rutaPaginaTemperaturas = ['/menu',this.nombreUsuario,'temperaturas']
      }
    )

  }

  mostrarPaginaInicio(){
    console.log('Entre a Inicio');
    this._router.navigate(this.rutaPaginaInicio);
  }

  mostrarPaginaLugares(){
    console.log('Entre a Lugares');
    this._router.navigate(this.rutaPaginaLugares);
  }

  mostrarPaginaTemperaturas(){
    console.log('Entre a Temperaturas');
    this._router.navigate(this.rutaPaginaTemperaturas);
  }

  logout(){
    const url = ['/login'];
    this._router.navigate(url);
  }

}

