import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent  implements OnInit{

  verf=false;
  usuario: any;
  iduser:any;
  user ={
    nombre: "",
    usuario:"",
    clave: "",
    celular:"",
    tipo_usuario:"",
  };

  //para validar
  validnombre =true;
  validusuario =true;
  validclave =true;
  validcelular =true;
  validtipo_usuario =true;
  beditar = false;




  constructor( private suser: UsuarioService) { }

  ngOnInit(): void {
    this.consulta();
    this.limpiar();
  }
    mostrar(dato:any) {
      switch(dato) {
        case 0:
          this.verf = false;
          this.beditar = false;
          this.iduser ="";
          this.limpiar();

        break;
        case 1:
          this.verf =true;
          break;


    }
  }
  //LIMPIAR
  limpiar(){
    this.user.nombre = "";
    this.user.usuario = "";
    this.user.clave = "";
    this.user.celular = "";
    this.user.tipo_usuario = "";
  }
//validar
  validar(){
  if(this.user.nombre== ""){
      this.validnombre = false;
    }else{
    this.validnombre =true;
  }
  if(this.user.usuario== ""){
    this.validusuario = false;
    }else{
    this.validusuario =true;
  }
  if(this.user.clave== ""){
    this.validclave = false;
    }else{
    this.validclave =true;
  }

  if(this.user.celular== ""){
    this.validcelular = false;
    }else{
    this.validcelular =true;
  }

  if(this.user.tipo_usuario== ""){
    this.validtipo_usuario = false;
    }else{
    this.validtipo_usuario =true;
  }
  }

  consulta(){
    this.suser.consultar().subscribe((result:any)=>{
      this.usuario = result;
      console.log(this.usuario);
    })
  }

  ingresar(){
   // console.log(this.usuario);
   this.validar();
   if(this.validnombre==true && this.validusuario==true &&  this.validclave==true &&   this.validcelular==true && this.validtipo_usuario==true){


    this.suser.insertar(this.user).subscribe((datos:any)=>{
      if (datos['resultado']=='OK') {
       // alert(datos['mensaje']);
        this.consulta();
      }
    });
    this.mostrar(0);
    this.limpiar();
    }
  }

  pregunta(id:any, usuario:any){
    Swal.fire({
      title: '¿Esta seguro de eliminar el usuario '+ usuario + '?',
      text: "Una vez acepte, no podra ser revertido",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, ¡Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrarrusuario(id);
        Swal.fire(
          'Eliminado',
          'El usuario ha sido eliminado.',
          'success'

        )
      }
    })
  }

  borrarrusuario(id:any){
    this.suser.eliminar(id).subscribe((datos:any) =>{
        if(datos['resultado']=='OK'){
          this.consulta();
        }
    })
  }

  cargardatos(datos:any, id:number){
    //console.log(datos);
    this.user.nombre = datos.nombre;
    this.user.usuario = datos.usuario;
    this.user.clave = datos.clave;
    this.user.celular = datos.celular;
    this.user.tipo_usuario = datos.tipo_usuario;
   // this.iduser = id;
    this.mostrar(1);
    //this.beditar =true;


  }

 editar(){
    this.validar();
   if(this.validnombre==true &&this.validusuario==true && this.validclave==true &&   this.validcelular==true && this.validtipo_usuario==true){


    this.suser.edit(this.user, this.iduser).subscribe((datos:any)=>{
      if (datos['resultado']=='OK') {
       // alert(datos['mensaje']);
        this.consulta();
      }
    });
    this.mostrar(0);

    }

  }


}

