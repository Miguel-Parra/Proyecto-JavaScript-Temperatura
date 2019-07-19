import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
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
        console.log('valor MENU',this.idUsuario);
        this.rutaPaginaInicio = ['/menu',this.idUsuario,'slider',this.idUsuario];
        this.rutaPaginaLugares = ['/menu',this.idUsuario,'lugares',this.idUsuario]
        this.rutaPaginaTemperaturas = ['/menu',this.idUsuario,'temperaturas',this.idUsuario]
      }
    )

  }

  mostrarPaginaInicio(){
    console.log('Entre a Inicio');
    console.log(this.rutaPaginaInicio);
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

