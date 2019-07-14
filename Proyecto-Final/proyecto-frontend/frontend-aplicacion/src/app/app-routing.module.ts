import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { MenuComponent } from './rutas/menu/menu.component';
import { SliderComponent } from './rutas/slider/slider.component';
import { LugaresComponent } from './rutas/lugares/lugares.component';
import { TemperaturasComponent } from './rutas/temperaturas/temperaturas.component';


const routes: Routes = [
  {
    path:'menu',
    component:MenuComponent,
    children:[
      {
        path:'slider',
        component:SliderComponent
      },
      {
        path:'lugares',
        component:LugaresComponent
      },
      {
        path:'temperaturas',
        component:TemperaturasComponent
      },
    ]
  },
  {
    path:'',
    redirectTo:'/menu/slider',
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
