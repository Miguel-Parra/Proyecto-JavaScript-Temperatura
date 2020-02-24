import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { TemperaturaHttpService } from 'src/app/servicios/http/temperatura-http.service';
import { LoginHttpService } from 'src/app/servicios/http/login-http.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-temperaturas',
  templateUrl: './temperaturas.component.html',
  styleUrls: ['./temperaturas.component.css'],
})
export class TemperaturasComponent implements OnInit {

  LineChart = [];
  arregloTemperaturas = [];
  arregloLugares = [];
  idUsuario;
  seleccionarValor;
  skip = 0;
  inicio;
  fin;

  constructor(private readonly _temperaturaService: TemperaturaHttpService,
              private readonly _loginHttpService: LoginHttpService,
              private readonly _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.traerDatos();
    const parametros$ = this._activatedRoute.params;
this.inicio = 0;
this.fin = 5;
    parametros$
      .subscribe(
        (parametros) => {
          console.log(parametros);
          this.idUsuario = parametros.idUsuario;
        }
      );
    const respuestaLugaresPorUsuario$ = this._loginHttpService.buscarPorId(this.idUsuario);
    respuestaLugaresPorUsuario$
      .subscribe(
        (datos) => {
          const respuestaString = JSON.parse(JSON.stringify(datos));
          this.arregloLugares = respuestaString.arregloLugares;

        }
      );



    const temperaturas$ = this._temperaturaService.buscarTodos();
    console.log('skip front', this.skip);
    temperaturas$.subscribe(
      (datos) => {
        datos.forEach(
          (valor) => {
            this.arregloTemperaturas.push(valor.medicion);
            // console.log('DATOS000000000000000000', this.arregloTemperaturas);
          }
        );
        this.LineChart = new Chart('lineChart', {
          type: 'line',
          data: {
            labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
            datasets: [{
              label: 'Variación de tiempo en lugares',
              lineTension: 1.0,
              fill: false,
              data: this.arregloTemperaturas,
              borderColor: 'red',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: 'Gráfica en tiempo real Temperatura vs Tiempo',
            },
            scales: {
              xAxes: [{
                display: true,
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Temperatura'
                }
              }]
            }
          }
        });


      },
      (error) => {
        console.log(error);
      }
    );

  }

  actualizarGrafica() {

    const temperaturas$ = this._temperaturaService.buscarTodos();
    temperaturas$.subscribe(
      (datos) => {
        datos.forEach(
          (valor) => {
            this.arregloTemperaturas.push(valor.medicion);
            // console.log('DATOS111111111111111', this.arregloTemperaturas);
          }
        );

         this.arregloTemperaturas
          .splice(this.inicio, this.fin);
        this.inicio = this.fin + 5;


        this.LineChart = new Chart('lineChart', {
          type: 'line',
          data: {
            labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
            datasets: [{
              label: 'Variación de tiempo en lugares',
              lineTension: 1.0,
              fill: false,
              data: this.arregloTemperaturas,
              borderColor: 'red',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: 'Gráfica en tiempo real Temperatura vs Tiempo'
            },
            scales: {
              xAxes: [{
                display: true,
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Temperatura'
                }
              }]
            }
          }
        });


      },
      (error) => {
        console.log(error);
      }
    );
  }


  cambioGrafica() {
    if (this.seleccionarValor === 'Verde') {

      const temperaturas$ = this._temperaturaService.buscarTodos();
      temperaturas$.subscribe(
        (datos) => {
          datos.map(
            (valor) => {
              this.arregloTemperaturas.push(valor.medicion - 4);
            }
          );


          this.LineChart = new Chart('lineChart', {
            type: 'line',
            data: {
              labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
              datasets: [{
                label: 'Variación de tiempo en lugares',
                lineTension: 1.0,
                fill: false,
                data: this.arregloTemperaturas,
                borderColor: 'red',
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              title: {
                display: true,
                text: 'Gráfica en tiempo real Temperatura vs Tiempo'
              },
              scales: {
                xAxes: [{
                  display: true,
                }],
                yAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Temperatura'
                  }
                }]
              }
            }
          });


        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      const temperaturas$ = this._temperaturaService.buscarTodos();
      temperaturas$.subscribe(
        (datos) => {
          datos.map(
            (valor) => {
              this.arregloTemperaturas.push(valor.medicion + 4);
            }
          );


          this.LineChart = new Chart('lineChart', {
            type: 'line',
            data: {
              labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
              datasets: [{
                label: 'Variación de tiempo en lugares',
                lineTension: 1.0,
                fill: false,
                data: this.arregloTemperaturas,
                borderColor: 'red',
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              title: {
                display: true,
                text: 'Gráfica en tiempo real Temperatura vs Tiempo'
              },
              scales: {
                xAxes: [{
                  display: true,
                }],
                yAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Temperatura'
                  }
                }]
              }
            }
          });


        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  async traerDatos() {
    // const temperaturas$ = this._temperaturaService.buscarTodos();
    const arregloTemperatura = await this._temperaturaService.buscarTodos().subscribe( resp => {
      console.log('chupalo', resp);
    });
  }
}
