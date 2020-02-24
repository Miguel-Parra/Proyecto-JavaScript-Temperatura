import { Injectable } from '@angular/core';
import { HttpSailsPrincipal } from './http-sails.principal';
import { environment } from '../../../../src/environments/environment';
import { Lugar } from '../../dto/lugar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class LugarHttpService extends HttpSailsPrincipal<Lugar> {

  constructor(private readonly _httpClient: HttpClient) {
    super(_httpClient, environment.url, '/Lugar');
  }

  buscar(busqueda: string): Observable<any> {
    let consulta = '';
    if (busqueda) {
      consulta = '?nombreLugar=' + busqueda;
    }
    const urlBuscar = 'http://localhost:1337/lugar' + consulta;
    return this._httpClient
      .get(
        urlBuscar,
      );
  }

  prenderLedLugar(color, numero) {
    console.log('COLOR', color);
    const url = `${this.url}/prenderLed/${color}`;
    return this._httpClient.post(url, {colorLugar: color, numeroLed: numero});
  }

  prenderVentiladorLugar(numeroLedR) {
    console.log('numeroLEd', numeroLedR);
    const url = `${this.url}/prenderVentilador/${numeroLedR}`;
    return this._httpClient.post(url, {numeroLed: numeroLedR});
  }

  buscarLugar(idUsuario): Observable<any> {
    const urlBuscar = 'http://localhost:1337/lugar?fkUsuario=' + idUsuario;
    return this._httpClient
      .get(
        urlBuscar,
      );
  }

  apagarLedLugar(numeroLedR) {
    console.log('COLOR A APAGAR', numeroLedR);
    const url = `${this.url}/apagarLed/${numeroLedR}`;
    console.log('URL: ', url);
    return this._httpClient.post(url, {numeroLed: numeroLedR});
  }
  desconectarLedLugar(numeroLedR) {
    console.log('NUMERO DE LED A DESCONECTAR', numeroLedR);
    const url = `${this.url}/desconectarLed/${numeroLedR}`;
    console.log('URL: ', url);
    return this._httpClient.post(url, {numeroLed: numeroLedR});
  }
}
