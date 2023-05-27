import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/assets/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string = 'https://localhost:8080/api/'

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json, application/xml, text/html;charset=UTF-8'
    })
  };

  public lista(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('https://localhost:4200/api/cliente/view', this.httpOptions);
  }

  public detail(id:number): Observable<Cliente>{
    return this.http.get<Cliente>(`https://localhost:4200/api/cliente/detail/${id}`, this.httpOptions);
  }

  public save(cliente:Cliente):Observable<any>{
    return this.http.post<any>('https://localhost:4200/api/cliente/create', cliente, this.httpOptions);
  }

  public update(id:number, cliente:Cliente):Observable<any>{
    return this.http.put<any>(`https://localhost:4200/api/cliente/update/${id}`, cliente, this.httpOptions);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://localhost:4200/api/cliente/delete/${id}`, this.httpOptions);
  }
}
