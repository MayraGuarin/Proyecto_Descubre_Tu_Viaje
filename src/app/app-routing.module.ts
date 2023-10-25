import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { validaruserGuard } from './guards/validaruser.guard';
import { SuscripcionComponent } from './modulos/suscripcion/suscripcion.component';
import { ServiciosComponent } from './modulos/servicios/servicios.component';
import { ContenidoComponent } from './modulos/contenido/contenido.component';
import { SoporteComponent } from './modulos/soporte/soporte.component';
import { Contenido2Component } from './modulos/contenido2/contenido2.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent, canActivate: [validaruserGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'usuarios', component: UsuariosComponent },
      {path: 'suscripcion', component: SuscripcionComponent },
      {path: 'servicios', component: ServiciosComponent },
      {path: 'contenido', component: ContenidoComponent },
      {path: 'soporte', component: SoporteComponent },
      {path: 'contenido2', component: Contenido2Component },


      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

    ]
  },
  { path: 'login', component: LoginComponent },
];

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
