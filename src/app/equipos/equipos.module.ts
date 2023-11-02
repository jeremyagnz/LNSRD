import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquiposRoutingModule } from './equipos-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MaterialModule } from '../material/material.module';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { CardComponent } from './components/card/card.component';
import { EquipoImagenPipe } from './pipes/equipo-imagen.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CalendarComponent } from './pages/calendar-page/calendar.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    SearchPageComponent,
    ListPageComponent,
    CalendarComponent,
    EquiposComponent,
    CardComponent,
    EquipoImagenPipe
  ],
  imports: [
    CommonModule,
    EquiposRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTabsModule

  ]
})
export class EquiposModule { }
