import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  url= 'http://localhost/proyecto/src/app/php/servicios/';

  constructor(private http:HttpClient) { }

  consultar() {
    return this.http.get(`${this.url}consultar.php`);
  }

  insertar(articulo:any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(articulo));
  }

  eliminar(id:number) {
    return this.http.get(`${this.url}eliminar.php?id=${id}`);
  }

  edit(datos:any) {
    return this.http.post(`${this.url}edit.php`, JSON.stringify(datos));
  }

}

