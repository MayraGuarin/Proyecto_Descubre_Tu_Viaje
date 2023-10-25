import { Component, OnInit } from '@angular/core';
import { ContenidoService } from 'src/app/servicios/contenido.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit{

  ciudadSeleccionada: string = ''; // Variable para almacenar la ciudad seleccionada


  constructor(private contenidoService: ContenidoService) {}

ngOnInit(): void {


    }
  }


