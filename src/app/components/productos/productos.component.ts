import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/assets/model/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  producto:Producto[] = [];
  imagenes:any[] = [];
 _producto:Producto = null;

  nombre: string; 
  material: string; 
  caracteristicas: string; 
  precio: number; 
  urlImage: string; 
  carrito_id: number; 
  cliente_id: number;
  
 
  
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private auth:AuthService,
              private productoService:ProductoService){}

    ngOnInit():void{
      this.cargarProducto();
      /*
      const id = this.activatedRoute.snapshot.params['id'];
      this.productoService.detail(id).subscribe(data =>{ this._producto = data 
      }, err => {alert(err + this._producto + `/update/${id}`); this.router.navigate([""])});*/
    }
    //bloque de vision y eliminado
    //verifica si esta loggeado
    public get isLogin():boolean{
      return this.auth.isAuthenticated();
    }
    //muestra el producto con request GET
    cargarProducto():void{
      this.productoService.lista().subscribe(data => {this.producto = data});
      //this.images.getImages();
    }
    //borra el producto con request DELETE
    borrarProducto(id:number):void{
      if(id != undefined){
        this.productoService.delete(id).subscribe(data => {this.cargarProducto();}
        , err => alert(err + 'Error al Borrar producto'));
      }
      this.router.navigate(["/"]);
    }

    //bloque de edicion request PUT
    editarProducto():void{
      const id = this.activatedRoute.snapshot.params['id'];
      this.productoService.update(id, this._producto).subscribe(data => {
        alert('Editado correctamente');
      }, err => {alert('No se pudo editar');})
      this.router.navigate(['/home']);
    }
    //subir imagenes al editar
   
    /*cargarImagen(event:any){
      let archivos = event.target.files
      let reader = new FileReader();
      let nombre:string = "hardcode";
                
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = () => {
      this.imagenes.push(reader.result);
      this.images.subirImagen(nombre + "_" + Date.now(), reader.result)
      .then(urlImage => {console.log(urlImage);
      this.images.url = urlImage;
      console.log('this.images.url' + ' ' + this.images.url);
      });                       
      }
     }*/

     //bloque para agregar producto request POST
     addProducto(){

      const add = new Producto(this.nombre, this.material, this.caracteristicas, this.precio, 
                               this.urlImage, this.carrito_id, this.cliente_id);
                  
      this.productoService.save(add).subscribe(data => {alert(data + 'Producto Añadido correctamente');
    });
    this.router.navigate(["/"]);
     }

}
