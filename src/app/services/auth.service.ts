import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from 'src/assets/model/user';

//interfaz aquí, dentro del archivo authService.ts
export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user: User[] = [];

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json, application/xml, text/html;charset=UTF-8'
    })
  };

  obtenerDatos(): Observable<User[]>{
    return this.http.get<User[]>('https://localhost:4200/api/view', this.httpOptions);
  }

  public detail(id:number): Observable<User>{
    return this.http.get<User>(`https://localhost:4200/api/user/detail/${id}`, this.httpOptions);
  }

  public update(id:number, user:User):Observable<any>{
    return this.http.put<any>(`https://portfolio-backend-danyalexandr.koyeb.app/api/persona/update/${id}`, user, this.httpOptions);
  }

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post('https://localhost:4200/api/user/login', credentials, {responseType: 'text'}).pipe(
      tap(response => {
        if (typeof response === 'string') {
          // Almacena el token en el LocalStorage
          localStorage.setItem('authToken', response);
        }
      })
    );
  }

  logout() {
    // Elimina el token del LocalStorage
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    // Comprueba si hay un token en el LocalStorage
    return localStorage.getItem('authToken') !== null;
  }
}
