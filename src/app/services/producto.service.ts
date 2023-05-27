import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/assets/model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string = 'localhost:8080/api/'
  
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json, application/xml, text/html;charset=UTF-8'
    })
  };

  public lista(): Observable<Producto[]>{
    return this.http.get<Producto[]>('localhost:8080/api/producto/view', this.httpOptions);
  }

  public detail(id:number): Observable<Producto>{
    return this.http.get<Producto>(`localhost:8080/api/producto/detail/${id}`, this.httpOptions);
  }

  public save(producto:Producto):Observable<any>{
    return this.http.post<any>(this.url + 'producto/create', producto, this.httpOptions);
  }

  public update(id:number, producto:Producto):Observable<any>{
    return this.http.put<any>(`localhost:8080/api/producto/update/${id}`, producto, this.httpOptions);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`localhost:8080/api/producto/delete/${id}`, this.httpOptions);
  }
}
