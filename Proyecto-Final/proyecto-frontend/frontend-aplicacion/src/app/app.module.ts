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
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TemperaturaHttpService } from './servicios/http/temperatura-http.service';
import {ChartModule} from "primeng/chart";
import {ButtonModule} from "primeng/button";
import { ModalAgregarLugarComponent } from './rutas/modal/modal-agregar-lugar/modal-agregar-lugar.component';
import { ModalVerTemperaturaComponent } from './rutas/modal/modal-ver-temperatura/modal-ver-temperatura.component';
import {MatDialogModule} from '@angular/material/dialog';
import {TableModule} from "primeng/table";
import {AuthService} from "./servicios/auth/auth.service";

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
    RegistroLugarComponent,
    ModalAgregarLugarComponent,
    ModalVerTemperaturaComponent,
  ],
  entryComponents: [
    ModalVerTemperaturaComponent,
    ModalAgregarLugarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    TabViewModule,
    PanelModule,
    CardModule,
    ChartModule,
  ],
  providers: [
    LoginHttpService,
    RegistrarHttpService,
    LugarHttpService,
    TemperaturaHttpService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
