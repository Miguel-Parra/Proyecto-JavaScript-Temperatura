import { Component, OnInit } from '@angular/core';
import { LugarHttpService } from 'src/app/servicios/http/lugar-http.service';
import { NombreUsuarioService } from 'src/app/servicios/nombreUsuario/nombre-usuario.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  mostrar = false;

  constructor(private readonly _lugarHttpService: LugarHttpService,
              private readonly _nombreService: NombreUsuarioService) { }

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
    const lugarNuevo = {
        identificador: identificadorLugar,
        nombreLugar: nombreLugar,
        color: colorLugar,
        fkUsuario: 1
    } 

   
    const respuestaLugar$ = this._lugarHttpService.crear(lugarNuevo);

    respuestaLugar$
    .subscribe(
      (datos)=>{
        console.log(datos);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
