import { Injectable } from '@angular/core';

Injectable()

export class NombreUsuarioService{
    
nombreUsuario;
    constructor(){}

    conseguirNombre(nombre){
       return this.nombreUsuario = nombre;
    }

}