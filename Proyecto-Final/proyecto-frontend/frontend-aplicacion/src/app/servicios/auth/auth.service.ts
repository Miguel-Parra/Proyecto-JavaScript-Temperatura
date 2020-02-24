import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogueado = false;
  sesion;

  constructor(
    private readonly _httpClient: HttpClient
  ){

  }

  login(nombre: string, password: string) {
    const url = environment.url + `/login?nombre=${nombre}&password=${password}`;
    console.log('llego/aca', url);
    return this._httpClient
      .get(
        url
      );
  }

}
