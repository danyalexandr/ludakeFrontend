import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrousel } from 'src/assets/model/carrousel';

@Injectable({
  providedIn: 'root'
})
export class CarrouselService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json, application/xml, text/html;charset=UTF-8'
    })
  };

  public lista(): Observable<Carrousel[]>{
    return this.http.get<Carrousel[]>('https://localhost:4200/api/carrousel/view', this.httpOptions);
  }

  public detail(id:number): Observable<Carrousel>{
    return this.http.get<Carrousel>(`https://localhost:4200/api/carrousel/detail/${id}`, this.httpOptions);
  }

  public save(carrousel:Carrousel):Observable<any>{
    return this.http.post<any>('https://localhost:4200/api/carrousel/create', carrousel, this.httpOptions);
  }

  public update(id:number, carrousel:Carrousel):Observable<any>{
    return this.http.put<any>(`https://localhost:4200/api/carrousel/update/${id}`, carrousel, this.httpOptions);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://localhost:4200/api/carrousel/delete/${id}`, this.httpOptions);
  }
}
