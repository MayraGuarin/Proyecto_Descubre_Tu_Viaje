import { Component, OnInit } from '@angular/core';
import { SoporteService } from 'src/app/servicios/soporte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss']
})
export class SoporteComponent implements OnInit {

  verf = false;
  soporte:any;
  user = {
    Nombre:"",
    Correo:"",
    inquietudes:"",
  };

  //PARA VALIDAR
  validNombre = true;
  validCorreo = true;
  validinquietudes = true;
  beditar = false;

constructor(private ssoporte: SoporteService) {}

ngOnInit(): void {
    this.consulta();
    this.limpiar();
}
    mostrar(dato:any) {
      switch(dato){
        case 0:
          this.verf = false;
          this.limpiar();
          break;
          case 1:
            this.verf = true;
            break;
      }
    }
    limpiar() {
      this.user.Nombre = "";
      this.user.Correo = "";
      this.user.inquietudes = "";
    }
    validar(){
      if(this.user.Nombre==""){
          this.validNombre = false;
      }else{
        this.validNombre = true;
      }
      if(this.user.Correo==""){
        this.validCorreo = false;
      }else{
      this.validCorreo = true;
      }
      if(this.user.inquietudes==""){
      this.validinquietudes = false;
      }else{
      this.validinquietudes = true;
      }
    }

    consulta(){
      this.ssoporte.consultar().subscribe((result:any) =>{
        this.soporte = result;
        console.log(this.soporte);
      })
    }
    ingresar(){
     console.log(this.user);

     this.validar();
        if(this.validNombre==true && this.validCorreo==true && this.validinquietudes==true){

          this.ssoporte.insertar(this.user).subscribe((datos:any)=>{
          if (datos['resultado']=='OK') {
                    this.consulta();
          }
        });
        this.mostrar(0);
        this.limpiar();
        }
    }
    pregunta(id:any, Nombre:any){
      Swal.fire({
        title: '¿Está seguro de eliminar ' +  Nombre +  ' ? ',
        text: "El proceso no podra ser revertido!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.borrarusuario(id);
          Swal.fire(
            'Eliminado!',
            'el usuario ha sido eliminado.',
            'success'
          )
        }
      })
    }
    borrarusuario(id:any){
      this.ssoporte.eliminar(id).subscribe((datos:any)=>{
        if(datos['resultado']=='OK') {
          this.consulta();
        }
      });
    }
    cargardatos(datos:any, id:number) {
        this.soporte.Nombre = datos.nombre;
        this.soporte.Correo = datos.Correo;
        this.soporte.inquietudes = datos.inquietudes;
        this.mostrar(1);
    }
}
