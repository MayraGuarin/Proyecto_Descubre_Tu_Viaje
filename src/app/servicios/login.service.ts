import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url= 'http://localhost/proyecto/src/app/php/Login/';

  constructor(private http:HttpClient) { }


  consultar(user:any, clave:any) {
    return this.http.get(`${this.url}Login.php?user=${user}&clave=${clave}`);
  }
}
