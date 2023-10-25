import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './estructura/header/header.component';
import { NavComponent } from './estructura/nav/nav.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { SuscripcionComponent } from './modulos/suscripcion/suscripcion.component';
import { ServiciosComponent } from './modulos/servicios/servicios.component';
import { ContenidoComponent } from './modulos/contenido/contenido.component';
import { SoporteComponent } from './modulos/soporte/soporte.component';
import { Contenido2Component } from './modulos/contenido2/contenido2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    DashboardComponent,
    LoginComponent,
    UsuariosComponent,
    SuscripcionComponent,
    ServiciosComponent,
    ContenidoComponent,
    SoporteComponent,
    Contenido2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
