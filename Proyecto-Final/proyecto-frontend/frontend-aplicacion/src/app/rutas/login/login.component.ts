import { Component, OnInit } from '@angular/core';
import { LoginHttpService } from 'src/app/servicios/http/login-http.service';
import { Router } from '@angular/router';
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly _loginHttpService: LoginHttpService,
              private readonly _router: Router,
              private readonly _authService: AuthService) { }

  ngOnInit() {
  }

  login(formulario) {
    const nombreUsuario =  formulario.controls.nombreusuario.value;
    const paswordUsuario = formulario.controls.passwordusuario.value;
    console.log('NombreUs: ', nombreUsuario, 'Pass:', paswordUsuario );
    const respuestaLogin$ = this._authService.login(nombreUsuario, paswordUsuario);
    respuestaLogin$
      .subscribe(
        (datos: any[]) => {
          if (datos.length > 0) {
            console.log('Login exitoso');
            this._authService.estaLogueado = true;
            this._authService.sesion = datos[0];
            const idUsuario = this._authService.sesion.id;
            if (this._authService.sesion.rol === 'usuario') {
              this._router.navigate(['/lugares']);
            }
          } else {
            console.log('No existe el usuario');
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  registrar() {
    const url = ['/registrar'];
    this._router.navigate(url);
  }
}
