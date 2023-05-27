export class Producto {

    nombre:string;
    material:string;
    caracteristicas:string;
    precio:number;
    urlImage:string;
    carrito_id:number;
    cliente_id:number;

    constructor(nombre:string, material:string, caracteristicas:string,
                precio:number, urlImage:string, carrito_id:number, cliente_id:number){

                this.nombre = nombre;
                this.material = material;
                this.caracteristicas = caracteristicas;
                this.precio = precio;
                this.urlImage = urlImage;
                this.carrito_id = carrito_id;
                this.cliente_id = cliente_id;
    }
}
