import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquiposRoutingModule } from './equipos-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { MaterialModule } from '../material/material.module';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { CardComponent } from './components/card/card.component';
import { EquipoImagenPipe } from './pipes/equipo-imagen.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPageComponent,
    SearchPageComponent,
    ListPageComponent,
    PlayerPageComponent,
    EquiposComponent,
    CardComponent,
    EquipoImagenPipe
  ],
  imports: [
    CommonModule,
    EquiposRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class EquiposModule { }
