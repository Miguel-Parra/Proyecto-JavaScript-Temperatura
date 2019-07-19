import { Component, OnInit } from '@angular/core';
import { LugarHttpService } from 'src/app/servicios/http/lugar-http.service';
import { ActivatedRoute } from '@angular/router';
import { LoginHttpService } from 'src/app/servicios/http/login-http.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  mostrar = false;

  idUsuario;

  constructor(private readonly _lugarHttpService: LugarHttpService,
              private readonly _activatedRoute:ActivatedRoute,
              private readonly _loginHttpService:LoginHttpService) { }

  ngOnInit() {

    const parametros$ = this._activatedRoute.params;

    parametros$
    .subscribe(
      (parametros)=>{
        console.log(parametros);
        this.idUsuario = parametros.idUsuario;
      }
    )

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
        fkUsuario: this.idUsuario
    } 

    const respuestaLugar$ = this._lugarHttpService.crear(lugarNuevo);

    respuestaLugar$
    .subscribe(
      (datos)=>{
        console.log(datos);
      },
      (error)=>{
        alert('No se almaceno el lugar, Ya existe ese identificador');
      }
    );
  }
}
