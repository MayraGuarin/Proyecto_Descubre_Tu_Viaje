import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {


  verf = false;
  usuario:any;
  idservicio:any;
  departamento:any;
  ciudad:any;



  servicio ={
    nombre: "",
    codigo:"",
    fo_depto:0,
    fo_ciudad:0,

  };

  validnombre = true;
  validcodigo = true;
  validfo_depto =true;
  validfo_ciudad = true;
  beditar = false;




  constructor(private sservicio:ServiciosService){ }
  ngOnInit(): void {
    this.consulta();
    this.limpiar();
    this.consulta_depto();
    this.consulta_ciudad();
  }
  //muestra el formulario
    mostrar(dato:any) {
      switch(dato) {
        case 0:
          this.verf = false;
          this.beditar = false;
          this.idservicio = false;
        break;
        case 1:
          this.verf =true;
          break;
    }
  }
  limpiar(){
    this.servicio.nombre = "";
    this.servicio.codigo = "";
    this.servicio.fo_depto = 0;
    this.servicio.fo_ciudad= 0;

  }
  validar(){
    if(this.servicio.nombre== ""){
        this.validnombre = false;
      }else{
      this.validnombre =true;
    }
    if(this.servicio.codigo== ""){
      this.validcodigo = false;
      }else{
      this.validcodigo =true;
    }
    if(this.servicio.fo_depto== 0){
      this.validfo_depto = false;
      }else{
      this.validfo_depto =true;
    }
    if(this.servicio.fo_ciudad== 0){
      this.validfo_ciudad = false;
      }else{
      this.validfo_ciudad =true;
    }
    }

  consulta(){
    this.sservicio.consultar().subscribe((result:any)=>{
      this.usuario = result;
      console.log(this.usuario);
    })
  }
  consulta_depto(){
    this.sservicio.consultar_depto().subscribe((result:any)=>{
      this.departamento= result;
      console.log(this.usuario);
    })
  }
  consulta_ciudad(){
    this.sservicio.consultar_ciudad().subscribe((result:any)=>{
      this.ciudad= result;
      console.log(this.usuario);
    })
  }

  ingresar(){

    this.validar();
    console.log(this.servicio);
   if(this.validnombre==true && this.validcodigo==true && this.validfo_depto==true && this.validfo_ciudad==true ){


     this.sservicio.insertar(this.servicio).subscribe((datos:any)=>{
       if (datos['resultado']=='OK') {
        // alert(datos['mensaje']);
         this.consulta();
       }
     });
     this.mostrar(0);
     this.limpiar();

     }
   }

   pregunta(id:any, nombre:any){
    console.log("entro con el id " + id);
    Swal.fire({

      title: '¿Esta seguro de eliminar el servicio '+ nombre + '?',
      text: "Una vez acepte, no podra ser revertido",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, ¡Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrarservicio(id);
        Swal.fire(
          'Eliminado',
          'El servicio ha sido eliminado.',
          'success'

        )
      }
    })
  }

  borrarservicio(id:any){
    this.sservicio.eliminar(id).subscribe((datos:any) =>{
        if(datos['resultado']=='OK'){
          this.consulta();
        }
    })
  }

  cargardatos(datos:any, id:number){
    //console.log(datos);
    this.servicio.nombre = datos.nombre;
    this.servicio.codigo = datos.codigo;
    this.servicio.fo_depto = datos.fo_depto;
    this.servicio.fo_ciudad = datos.fo_ciudad;

    this.idservicio = id;
    this.mostrar(1);
    this.beditar =true;


  }

 editar(){
    this.validar();
   if(this.validnombre==true &&this.validcodigo==true && this.validfo_depto==true &&
    this.validfo_ciudad==true ){


    this.sservicio.edit(this.servicio, this.idservicio).subscribe((datos:any)=>{
      if (datos['resultado']=='OK') {
       // alert(datos['mensaje']);
        this.consulta();
      }
    });
    this.mostrar(0);

    }

  }

  }







