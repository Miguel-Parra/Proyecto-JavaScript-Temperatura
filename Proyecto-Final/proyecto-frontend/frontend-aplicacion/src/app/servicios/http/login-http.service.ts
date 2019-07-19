import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';
import { Login } from '../../dto/login';
import { HttpSailsPrincipal } from './http-sails.principal';


@Injectable()

export class LoginHttpService extends HttpSailsPrincipal<Login>{
    
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,'/Login')
    }

    autenticarUsuario(nombreUsuario,passwordUsuario){
        console.log("meodod auntenticar", nombreUsuario);
        const url = `${this.url}/autenticarUsuario/${nombreUsuario}/${passwordUsuario}`;
        return this._httpClient.get(url);
    }

  
}