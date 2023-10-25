import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  url= 'http://localhost/proyecto/src/app/php/servicios/';

  constructor(private http:HttpClient) { }

  consultar() {
    return this.http.get(`${this.url}consultar.php`);
  }
  consultar_depto() {
    return this.http.get(`${this.url}consultar_depto.php`);
  }
  consultar_ciudad() {
    return this.http.get(`${this.url}consultar_ciudad.php`);
  }

  insertar(datos:any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(datos));
  }

  eliminar(id:number) {
    return this.http.get(`${this.url}eliminar.php?id=${id}`);
  }

  edit(datos:any, id:number) {
    return this.http.post(`${this.url}editar.php?id=${id}`, JSON.stringify(datos));
  }

}

