import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label:'Listado de equipos', icon:'list', url:'./equipos'},
    {label:'Calendario', icon:'calendar_today', url:'./calendario'},
    {label:'Posiciones', icon:'search', url:'./posiciones'},
    {label:'Buscar', icon:'search', url:'./search'},


    /* //fix
    {label:'Equipos', icon:'user', url:'./equipos'}, */
  ]
}
