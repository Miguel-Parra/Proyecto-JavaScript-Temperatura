import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  mostrar = false;

  constructor() { }

  ngOnInit() {
  }

  mostrarRegistroLugar(valor){
    this.mostrar = valor;
  }

  mostrarPaginaLugar(valor){
    this.mostrar = valor
  }

  anadirLugar(){

  }
}
