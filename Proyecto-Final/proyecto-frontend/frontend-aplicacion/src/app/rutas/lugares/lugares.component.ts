import { Component, OnInit } from '@angular/core';
import { LugarHttpService } from 'src/app/servicios/http/lugar-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginHttpService } from 'src/app/servicios/http/login-http.service';
import {AuthService} from '../../servicios/auth/auth.service';
import {ModalAgregarLugarComponent} from '../modal/modal-agregar-lugar/modal-agregar-lugar.component';
import {MatDialog} from '@angular/material';
import {ModalVerTemperaturaComponent} from '../modal/modal-ver-temperatura/modal-ver-temperatura.component';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  id = '';
  contador;
  nombre = '';
  correo = '';
  idUsuario;
  numeroLed;
  sensor;
  arregloLugares;
  idActualizar;
  ocultar = false;
  busquedaNombre = '';

  constructor(private readonly _lugarHttpService: LugarHttpService,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly _router: Router,
              private readonly _loginHttpService: LoginHttpService,
              private readonly _authService: AuthService,
              private readonly _matDialog: MatDialog) { }

  ngOnInit() {
    this.contador = 1;
    this.numeroLed = 1;
    this.id = this._authService.sesion.id;
    this.nombre = this._authService.sesion.nombre;
    this.correo = this._authService.sesion.correo;
    this.idUsuario = this._authService.sesion.id;
    const respuestaLugaresPorUsuario$ = this._lugarHttpService.buscarLugar(this.idUsuario);
    respuestaLugaresPorUsuario$
      .subscribe(
        (datos) => {
          this.arregloLugares = datos;
          console.log(this.arregloLugares);

        }
      );

  }

  mostrarPaginaLugar(mostrar) {
    const rutaPaginaLugar = ['/menu', this.idUsuario, 'lugares'];
    this._router.navigate(rutaPaginaLugar);

  }

  buscarPorNombre() {
    const busqueda$ = this._lugarHttpService
      .buscar(this.busquedaNombre);
    busqueda$
      .subscribe(
        (lugaresEncontrados) => {
          this.arregloLugares = lugaresEncontrados;
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  abrirLugar() {
    const matDialogRefModalIngresarLugar =  this._matDialog
      .open(
        ModalAgregarLugarComponent,
        {width: '40%',
        }
      );
    const respuestaDialog$ = matDialogRefModalIngresarLugar
      .afterClosed();
    respuestaDialog$
      .subscribe(
        (datos) => {
          if (datos) {
            if (this.contador > 2) {
              alert('No se almaceno el lugar, ha superado el límite de lugares');
            } else {
              if (this.numeroLed === 1) {
                datos.fkSensor = 1;
                datos.numeroLed = this.numeroLed;
                datos.fkUsuario = this.id;
                this.numeroLed = 2;
                this.ingresarLugarHttp(datos);
              } else {
                datos.fkSensor = 2;
                datos.numeroLed = this.numeroLed;
                datos.fkUsuario = this.id;
                this.ingresarLugarHttp(datos);
              }
              this.contador = this.contador  + 1;
            }

          } else {
            // undefined
          }
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  ingresarLugarHttp(datos) {
    const lugarIngresado$ = this._lugarHttpService.crear(datos);
    lugarIngresado$
      .subscribe(
        (lugarIngresado) => {
          this.arregloLugares.push(lugarIngresado);
        },
        (error) => {
          alert('No se almaceno el lugar, Ya existe ese identificador');
          console.log('Error: ', error);
        }
      );
    const respuestaPrender$ = this._lugarHttpService.prenderLedLugar(datos.color, datos.numeroLed);
    respuestaPrender$.subscribe(
      (datosPrender) => {
        console.log(datosPrender);
      },
      (error) => {
        console.log(error);
      }
    );
  }
/*
  anadirLugar(formulario) {
    const nombreLugar = formulario.controls.nombrelugar.value;
    let sensorAsignado = '';
    const colorLugar = formulario.controls.color.value;
    const identificadorLugar = formulario.controls.identificadorlugar.value;
    if (colorLugar === 'Rojo') {
      sensorAsignado = '28-000003065e30';
    } else {
      sensorAsignado = '28-000003062c7d';
    }
    const lugarNuevo = {
      identificador: identificadorLugar,
      nombreLugar,
      color: colorLugar,
      sensor: sensorAsignado,
      fkUsuario: this.idUsuario
    };

    const respuestaLugar$ = this._lugarHttpService.crear(lugarNuevo);
    const respuestaPrender$ = this._lugarHttpService.prenderLedLugar(colorLugar, );
    respuestaPrender$.subscribe(
      (datos) => {
        console.log(datos);
      },
      (error) => {
        console.log(error);
      }
    );
    respuestaLugar$
      .subscribe(
        (datos) => {
          console.log('iniciando', datos);
          this.mostrarDatosTabla();
        },
        (error) => {
          alert('No se almaceno el lugar, Ya existe ese identificador');
        }
      );
  }
*/
  verGrafica(lugar) {
    const matDialogRefModalVerTemperatura =  this._matDialog
      .open(
        ModalVerTemperaturaComponent,
        {width: '900px', data: lugar
        }
      );
    const respuestaDialog$ = matDialogRefModalVerTemperatura
      .afterClosed();
    respuestaDialog$
      .subscribe(
        (datos) => {
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  eliminarLugar(idLugar, numeroLed) {
    console.log(idLugar, numeroLed);
    const respuestaEliminar$ = this._lugarHttpService.eliminarPorId(idLugar);
    respuestaEliminar$
      .subscribe(
        (datos: any) => {
          if (datos.numeroLed === 1) {
            this.numeroLed = 1;
            this.contador = this.contador - 1;
          } else {
            this.contador = this.contador - 1;
          }
          const indice = this.arregloLugares
            .findIndex(
              (lugarBuscado) => {
                return lugarBuscado.id === datos.id;
              }
            );
          this.arregloLugares.splice(indice, 1);
        },
        (error) => {
          alert('No se pudo eliminar');
        }
      );
    const respuestaApagar$ = this._lugarHttpService.desconectarLedLugar(numeroLed);
    respuestaApagar$.subscribe(
      (datos) => {
        console.log(datos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  mostrarDatosTabla() {
    const respuestaLugaresPorUsuario$ = this._loginHttpService.buscarPorId(this.idUsuario);
    respuestaLugaresPorUsuario$
      .subscribe(
        (datos) => {
          const respuestaString = JSON.parse(JSON.stringify(datos));
          this.arregloLugares = respuestaString.arregloLugares;
          console.log(this.arregloLugares);

        }
      );

  }

  apagarLeds(valor) {
    const respuestaApagar$ = this._lugarHttpService.apagarLedLugar(valor);
    respuestaApagar$
      .subscribe(
        (datos) => {
          console.log(datos);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  logout() {
    const url = ['/login'];
    this._router.navigate(url);
  }

}
