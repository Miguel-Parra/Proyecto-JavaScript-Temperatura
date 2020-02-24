import { Injectable } from '@angular/core';
import { HttpSailsPrincipal } from './http-sails.principal';
import { Temperatura } from '../..//dto/temperatura';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()

export class TemperaturaHttpService{

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }
  buscartemperatura(sensor): Observable<any> {
    const urlBuscar = 'http://localhost:1337/temperatura?idSensor=' + sensor;
    return this._httpClient
      .get(
        urlBuscar,
      );
  }

}
