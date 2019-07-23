import { Injectable } from "@angular/core";
import { HttpSailsPrincipal } from './http-sails.principal';
import { Temperatura } from '../..//dto/temperatura';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Injectable()

export class TemperaturaHttpService extends HttpSailsPrincipal<Temperatura> {
    
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,'/Temperatura')
    }

}