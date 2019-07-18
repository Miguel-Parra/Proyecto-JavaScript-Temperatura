import { Component, OnInit } from '@angular/core';
import { LoginHttpService } from 'src/app/servicios/http/login-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly _loginHttpService:LoginHttpService) { }

  ngOnInit() {
  }

  login(formulario){
    const nombreUsuario =  formulario.controls.nombreusuario.value;
    const paswordUsuario = formulario.controls.passwordusuario.value;
    console.log("NombreUs: ", nombreUsuario,"Pass:", paswordUsuario );
    const respuestaLogin$ = this._loginHttpService.autenticarUsuario(nombreUsuario,paswordUsuario);
    respuestaLogin$
    .subscribe(
      (datos)=>{
        if(datos.productoEncontrado.length === 0){
          alert(`No hay registros del USUARIO ${nombreUsuario} Registrese por favor !!!`);
        }else{
          
        }
      },
      (error)=>{
        console.error(error);
      }
    )
  }

  registrarse(){
    console.log('hola');
  }
}
