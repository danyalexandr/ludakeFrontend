import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ayuda } from 'src/assets/model/ayuda';

@Injectable({
  providedIn: 'root'
})
export class AyudaService {

  url:string = '';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json, application/xml, text/html;charset=UTF-8'
    })
  };

  public lista(): Observable<Ayuda[]>{
    return this.http.get<Ayuda[]>('https://localhost:4200/api/ayuda/view', this.httpOptions);
  }

  public detail(id:number): Observable<Ayuda>{
    return this.http.get<Ayuda>(`https://localhost:4200/api/ayuda/detail/${id}`, this.httpOptions);
  }

  public save(ayuda:Ayuda):Observable<any>{
    return this.http.post<any>('https://localhost:4200/api/ayuda/create', ayuda, this.httpOptions);
  }

  public update(id:number, ayuda:Ayuda):Observable<any>{
    return this.http.put<any>(`https://portfolio-backend-danyalexandr.koyeb.app/api/proyecto/update/${id}`, ayuda, this.httpOptions);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`https://localhost:4200/api/ayuda/delete/${id}`, this.httpOptions);
  }
}
