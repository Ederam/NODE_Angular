import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';

const routes: Routes = [
  /**Configuracion de rutas */
  
 {
    path: 'home',
    component: DefaultComponent
  }, 
  {
    path: '',
    pathMatch:'full',
    redirectTo: '/home'
  }, 
  /**Implementacion de ruteo con lazy loading de angular */
  {
    path:'security',
    loadChildren: ()=> import('./modules/security/security.module').then(m => m.SecurityModule)
  },
  {
    path:'parameters',
    loadChildren: ()=> import('./modules/parameters/parameters.module').then(m => m.ParametersModule)
  },
  /**Este debe ser el ultimo */
 {
    path: '**',
    redirectTo: '/home'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
