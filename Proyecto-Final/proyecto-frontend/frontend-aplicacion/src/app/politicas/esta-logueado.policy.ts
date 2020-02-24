import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthService} from '../servicios/auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class EstaLogueadoPolicy implements CanActivate {
  constructor(private readonly _authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this._authService.sesion.rol === 'usuario') {
      return true;
    } else {
      return false;
    }
  }

}
