import { Component, OnInit } from '@angular/core';
import { LoginHttpService } from 'src/app/servicios/http/login-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly _loginHttpService:LoginHttpService,
              private readonly _router:Router) { }

  ngOnInit() {
  }

  login(formulario){
    console.log(formulario);
    const nombreUsuario =  formulario.controls.nombreusuario.value;
    const paswordUsuario = formulario.controls.passwordusuario.value;
    console.log("NombreUs: ", nombreUsuario,"Pass:", paswordUsuario );
    const respuestaLogin$ = this._loginHttpService.autenticarUsuario(nombreUsuario,paswordUsuario);
    respuestaLogin$
    .subscribe(
      (datos)=>{
        var arregloRespuesta = JSON.parse(JSON.stringify(datos));
        if(arregloRespuesta.productoEncontrado.length == 0){
          alert(`No hay registros del USUARIO ${nombreUsuario} Registrese por favor !!!`);
        }else{
          const url = ['/menu',nombreUsuario,'slider'];
          this._router.navigate(url);
        }
      },
      (error)=>{
        console.error(error);
      }
    )
  }

  registrarse(){
    const url = ['/registrar'];
    this._router.navigate(url);
  }
}
