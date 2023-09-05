import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404pageComponent } from './shared/pages/error404page/error404page.component';

const routes: Routes = [
  {
    path: 'teams',
    loadChildren: ()=> import('./equipos/equipos.module').then(m => m.EquiposModule)
  },
  {
    path: '404',
    component: Error404pageComponent
  },
  {
    path: '',
    redirectTo:'teams',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
