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

}