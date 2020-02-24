import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  rutaPaginaInicio;
  rutaPaginaLugares;
  rutaPaginaTemperaturas;
  idUsuario;
  id = '';
  nombre = '';
  correo = '';


  constructor(private readonly _router: Router,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly  _authService: AuthService
  ) { }

  ngOnInit() {
    this.id = this._authService.sesion.id;
    this.nombre = this._authService.sesion.nombre;
    this.correo = this._authService.sesion.correo;
    console.log('valor MENU', this.id);
    this.rutaPaginaLugares = ['/menu', this.id, 'lugares'];
    this.rutaPaginaTemperaturas = ['/menu', this.id, 'temperaturas'];
  }

  mostrarPaginaLugares() {
    console.log('Entre a Lugares');
    this._router.navigate(this.rutaPaginaLugares);
  }

  mostrarPaginaTemperaturas() {
    console.log('Entre a Temperaturas');
    this._router.navigate(this.rutaPaginaTemperaturas);
  }

  logout() {
    const url = ['/login'];
    this._router.navigate(url);
  }



}

