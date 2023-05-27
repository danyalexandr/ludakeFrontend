export class Cliente{

    responsable:string;
    empresa:string;
    producto:string;
    notas:string;
    email:string;
    telefono:string;

    constructor(responsable:string, empresa:string, producto:string, notas:string, email:string, telefono:string){
        this.responsable = responsable;
        this.empresa = empresa;
        this.producto = producto;
        this.notas = notas;
        this.email = email;
        this.telefono = telefono;
    }
}