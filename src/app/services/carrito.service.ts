import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from 'src/assets/model/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  url:string = 'https://localhost:4200/api/'

  constructor(private http:HttpClient) { }

  // encabezados para evitar error de cors
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json, application/xml, text/html;charset=UTF-8'
    })
  };

  public lista(): Observable<Carrito[]>{
    return this.http.get<Carrito[]>('https://localhost:4200/api/carrito/view', this.httpOptions);
  }

  public detail(id:number): Observable<Carrito>{
    return this.http.get<Carrito>(`https://localhost:4200/api/carrito/detail/${id}`, this.httpOptions);
  }

  public save(carrito:Carrito):Observable<any>{
    return this.http.post<any>('https://localhost:4200/api/carrito/create', carrito, this.httpOptions);
  }

  public update(id:number, carrito:Carrito):Observable<any>{
    return this.http.put<any>(`https://localhost:4200/api/carrito/update/${id}`, carrito, this.httpOptions);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://localhost:4200/api/carrito/delete/${id}`, this.httpOptions);
  }
}
