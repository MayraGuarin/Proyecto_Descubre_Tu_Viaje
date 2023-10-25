import { Contenido2Service } from './../../servicios/contenido2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido2',
  templateUrl: './contenido2.component.html',
  styleUrls: ['./contenido2.component.scss']
})
export class Contenido2Component implements OnInit{

// codigo para que salga recuadro con las opciones de restaurante, mapa...
  opcionSeleccionada: string = '';

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }
// Finaliza codigo

  constructor(private contenido2Service: Contenido2Service ) {}

ngOnInit(): void {


    }


}
