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

  anadirLugar(formulario){
    const nombreLugar = formulario.controls.nombrelugar.value;
    const colorLugar = formulario.controls.color.value;
    const identificadorLugar = formulario.controls.identificadorlugar.value;
    console.log("Nombre Lugar:",nombreLugar,"Identificador",identificadorLugar,"Color:",colorLugar);
  }
}
