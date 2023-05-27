import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nosotros } from 'src/assets/model/nosotros';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  url:string = 'https://localhost:8080/api'

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json, application/xml, text/html;charset=UTF-8'
    })
  };

  public lista(): Observable<Nosotros[]>{
    return this.http.get<Nosotros[]>('https://localhost:4200/api/nosotros/view', this.httpOptions);
  }

  public detail(id:number): Observable<Nosotros>{
    return this.http.get<Nosotros>(`https://localhost:4200/api/nosotros/detail/${id}`, this.httpOptions);
  }

  public save(nosotros:Nosotros):Observable<any>{
    return this.http.post<any>('https://localhost:4200/api/nosotros/create', nosotros, this.httpOptions);
  }

  public update(id:number, nosotros:Nosotros):Observable<any>{
    return this.http.put<any>(`https://localhost:4200/api/nosotros/update/${id}`, nosotros, this.httpOptions);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://localhost:4200/api/nosotros/delete/${id}`, this.httpOptions);
  }
}
