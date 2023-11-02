import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { CalendarComponent } from './pages/calendar-page/calendar.component';
import { PosicionesComponent } from './pages/posiciones/posiciones.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:'equipos', component:ListPageComponent},
      {path:'search', component:SearchPageComponent},
      {path:'calendario', component:CalendarComponent},
      {path:'posiciones', component:PosicionesComponent},
      {path:'equipo/:id', component:EquiposComponent},
      {path:'**', redirectTo:'equipos'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquiposRoutingModule { }
