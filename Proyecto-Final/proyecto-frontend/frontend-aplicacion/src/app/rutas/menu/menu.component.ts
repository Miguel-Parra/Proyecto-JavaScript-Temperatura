import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutaPaginaInicio = ['/menu/slider'];
  rutaPaginaLugares= ['/menu/lugares'];
  rutaPaginaTemperaturas= ['/menu/temperaturas'];
  
  
  constructor(private readonly _router:Router) { }

  ngOnInit() {


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

}
