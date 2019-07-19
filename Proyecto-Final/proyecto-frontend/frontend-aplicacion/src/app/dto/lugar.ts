export interface Lugar{
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    identificador:string;
    nombreLugar: string;
    color:string;
    fkUsuario?:any;
} 