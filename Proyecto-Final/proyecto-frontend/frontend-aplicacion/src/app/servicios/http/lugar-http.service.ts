import { Injectable } from '@angular/core';
import { HttpSailsPrincipal } from './http-sails.principal';
import { environment } from '../../../../src/environments/environment';
import { Lugar } from '../../dto/lugar';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class LugarHttpService extends HttpSailsPrincipal<Lugar>{

    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,'/Lugar');
    }


    prenderLedLugar(color){
        console.log("COLOR",color);
        const url = `${this.url}/prenderLed/${color}`;
        return this._httpClient.post(url,{colorLugar:color});
    }

    apagarLedLugar(valor){
        const url = `${this.url}/apagarLed/${valor}`;
        return this._httpClient.post(url,{apagar:valor});
    }
}