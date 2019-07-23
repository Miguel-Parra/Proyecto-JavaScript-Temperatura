import { Component, OnInit } from '@angular/core';
import { LugarHttpService } from 'src/app/servicios/http/lugar-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginHttpService } from 'src/app/servicios/http/login-http.service';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  idUsuario;

  mostrar = false;
  arregloLugares;
  idActualizar;
  ocultar = false;

  constructor(private readonly _lugarHttpService: LugarHttpService,
              private readonly _activatedRoute:ActivatedRoute,
              private readonly _router:Router,
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

  const respuestaLugaresPorUsuario$ = this._loginHttpService.buscarPorId(this.idUsuario);
  respuestaLugaresPorUsuario$
  .subscribe(
    (datos)=>{
        const respuestaString =JSON.parse(JSON.stringify(datos));
        this.arregloLugares = respuestaString.arregloLugares;
        console.log(this.arregloLugares);

    }
  );

  }

  mostrarPaginaLugar(mostrar){
    const rutaPaginaLugar = ['/menu',this.idUsuario,'lugares',this.idUsuario];
    this._router.navigate(rutaPaginaLugar);
    this.mostrar = mostrar;
  }

  mostrarRegistroLugar(mostrar){
    this.mostrar = mostrar;
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

    const respuestaPrender$ = this._lugarHttpService.prenderLedLugar(colorLugar);
    respuestaPrender$.subscribe(
    (datos)=>{
      console.log(datos);
    },
    (error)=>{
      console.log(error);
    }
    );
    respuestaLugar$
    .subscribe(
      (datos)=>{
        console.log(datos); 
        this.mostrarDatosTabla();
      },
      (error)=>{
        alert('No se almaceno el lugar, Ya existe ese identificador');
      }  
    );
  }



  eliminarLugar(idLugar){
    console.log(idLugar);
   const respuestaEliminar$ = this._lugarHttpService.eliminarPorId(idLugar);
   respuestaEliminar$
   .subscribe(
    (datos)=>{
      console.log(datos);
      this.mostrarDatosTabla();
    },
    (error)=>{
      alert('No se pudo eliminar');
    }  
  );

  };

  mostrarDatosTabla(){
    const respuestaLugaresPorUsuario$ = this._loginHttpService.buscarPorId(this.idUsuario);
    respuestaLugaresPorUsuario$
    .subscribe(
      (datos)=>{
          const respuestaString =JSON.parse(JSON.stringify(datos));
          this.arregloLugares = respuestaString.arregloLugares;
          console.log(this.arregloLugares);
  
      }
    );
  
  };

  apagarLeds(valor){
    const respuestaApagar$ = this._lugarHttpService.apagarLedLugar(valor);
    respuestaApagar$
    .subscribe(
      (datos)=>{
        console.log(datos);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  
  
}
