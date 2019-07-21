import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { MenuComponent } from './rutas/menu/menu.component';
import { SliderComponent } from './rutas/slider/slider.component';
import { LugaresComponent } from './rutas/lugares/lugares.component';
import { TemperaturasComponent } from './rutas/temperaturas/temperaturas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './rutas/login/login.component';
import { RegistrarComponent } from './rutas/registrar/registrar.component';
import { LoginHttpService } from './servicios/http/login-http.service';
import { RegistrarHttpService } from './servicios/http/registrar-https.service';
import { LugarHttpService } from './servicios/http/lugar-http.service';
import { RegistroLugarComponent } from './rutas/lugares/registroLugar/registro-lugar/registro-lugar.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RutaNoEncontradaComponent,
    SliderComponent,
    LugaresComponent,
    TemperaturasComponent,
    LoginComponent,
    RegistrarComponent,
    RegistroLugarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginHttpService,
    RegistrarHttpService,
    LugarHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
