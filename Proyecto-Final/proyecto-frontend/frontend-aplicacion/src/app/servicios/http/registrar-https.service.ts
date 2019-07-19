import { HttpSailsPrincipal } from './http-sails.principal';
import { Login } from '../../dto/login';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class RegistrarHttpService extends HttpSailsPrincipal <Login>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,'/Login')
    }

}