import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { MenuComponent } from './rutas/menu/menu.component';
import { SliderComponent } from './rutas/slider/slider.component';
import { LugaresComponent } from './rutas/lugares/lugares.component';
import { TemperaturasComponent } from './rutas/temperaturas/temperaturas.component';
import { LoginComponent } from './rutas/login/login.component';
import { RegistrarComponent } from './rutas/registrar/registrar.component';



const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registrar',
    component:RegistrarComponent
  },
  {
    path:'menu/:idUsuario',
    component:MenuComponent,
    children:[
      {
        path:'slider/:idUsuario',
        component:SliderComponent
      },
      {
        path:'lugares/:idUsuario',
        component:LugaresComponent
      },
      {
        path:'temperaturas/:idUsuario',
        component:TemperaturasComponent
      },
    ]
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'**',
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
