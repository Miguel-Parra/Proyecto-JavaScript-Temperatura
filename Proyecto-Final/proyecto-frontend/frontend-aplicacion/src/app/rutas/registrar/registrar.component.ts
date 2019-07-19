import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrarHttpService } from 'src/app/servicios/http/registrar-https.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private readonly _router:Router,
              private readonly _registrarHttpService:RegistrarHttpService) {

  }



  ngOnInit() {
  }

  registrar(formulario){
    const nombreUsuario = formulario.controls.nombreusuarionuevo.value;
    const passwordUsuario = formulario.controls.passwordusuarionuevo.value;
    const edadUsuario = formulario.controls.edadusuarionuevo.value;
    const direccionUsuario = formulario.controls.direccionusuarionuevo.value;
    const correoUsuario = formulario.controls.correousuarionuevo.value;
    const usuarioNuevo = {
      nombre: nombreUsuario,
      password: passwordUsuario,
      edad: edadUsuario,
      direccion: direccionUsuario,
      correo: correoUsuario,
    }

    const respuestaRegistrar$ = this._registrarHttpService.crear(usuarioNuevo);

    respuestaRegistrar$
    .subscribe(
      (datos)=>{
        console.log('datos',datos);
        const url = ['/login'];
        this._router.navigate(url);
      },
      (error)=>{
        console.log(error);
      }
    )

  }

}
