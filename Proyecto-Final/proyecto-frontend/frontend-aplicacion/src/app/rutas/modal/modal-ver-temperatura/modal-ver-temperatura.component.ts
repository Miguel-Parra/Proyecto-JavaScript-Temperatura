import {Component, Inject, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {TemperaturaHttpService} from "../../../servicios/http/temperatura-http.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LugarHttpService} from "../../../servicios/http/lugar-http.service";

@Component({
  selector: 'app-modal-ver-temperatura',
  templateUrl: './modal-ver-temperatura.component.html',
  styleUrls: ['./modal-ver-temperatura.component.css']
})
export class ModalVerTemperaturaComponent implements OnInit {
  LineChart = [];
  sensor;
  arregloTemperaturas = [];
  arregloLugares = [];
  inicio;
  fin;
  numeroLed;

  constructor(private readonly _temperaturaService: TemperaturaHttpService,
              private readonly _lugarHttpService: LugarHttpService,
              public dialogRef: MatDialogRef<ModalVerTemperaturaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('datos en modal: ', this.data);
    this.sensor = this.data.fkSensor.serie;
    this.numeroLed = this.data.numeroLed;
    console.log('SERIE SENSOR: ', this.sensor);
    this.traerDatosTemperatura(this.sensor);
    this.inicio = 0;
    this.fin = 5;
  }


  async traerDatosTemperatura(sensor) {
    const consulltaTemp$ = await this._temperaturaService.buscartemperatura(sensor);
    consulltaTemp$
      .subscribe( (data) => {
          this.arregloTemperaturas = data;
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
          console.log('Error: ', error);
        });
  }
  cancelar() {
    this.dialogRef.close();
  }
  prenderVentilador() {
    const respuestaPrender$ = this._lugarHttpService.prenderVentiladorLugar(this.numeroLed);
    respuestaPrender$.subscribe(
      (datosPrender) => {
        console.log(datosPrender);
      },
      (error) => {
        console.log(error);
      }
    );

  }
}




