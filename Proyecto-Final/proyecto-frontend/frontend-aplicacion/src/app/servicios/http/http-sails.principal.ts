import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//RESTFUL -> METODOS "="

//VAMOS A IMPLEMENTAR UNA CLASE -> Metodos y logica para el 
//RESTFUL

//Extender esa clase
//Usarla

export class HttpSailsPrincipal<ClaseEntidad>{
    protected url:string = "http://localhost:1337";
    protected modelo: string = "";

    //nos va a llegar, por que nosotros vamos a instanciar esta clase
    constructor(protected readonly httpClient:HttpClient,
                url:string,
                modelo:string,
                ){
                    this.url = url;
                    this.modelo = modelo;

    }

     //Crear 
     crear(nuevoRegistro:ClaseEntidad):Observable<ClaseEntidad>{
        const url = `${this.url}${this.modelo}`;
        return this.httpClient.post<ClaseEntidad>(url,nuevoRegistro)
    }
    //Buscar 
    buscarTodos():Observable<ClaseEntidad[]>{
        const url = `${this.url}${this.modelo}`;
        return this.httpClient.get<ClaseEntidad[]>(url);
    }
    //Actualizar 
    actualizar(id:number,registroAActulizar:ClaseEntidad):Observable<ClaseEntidad>{
        const url = `${this.url}${this.modelo}/${id}`;
        return this.httpClient.patch<ClaseEntidad>(url,registroAActulizar);
    }
    //Buscar Por Id
    buscarPorId(id:number):Observable<ClaseEntidad>{
        const url = `${this.url}${this.modelo}/${id}`;
        return this.httpClient.get<ClaseEntidad>(url);
    }

    //Eliminar Por Id
    eliminarPorId(id:number):Observable<ClaseEntidad>{
        const url = `${this.url}${this.modelo}/${id}`;
        return this.httpClient.delete<ClaseEntidad>(url);
    }
}



