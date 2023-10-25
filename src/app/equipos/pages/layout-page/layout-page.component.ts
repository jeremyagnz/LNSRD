import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label:'Listado de equipos', icon:'label', url:'./list'},
    {label:'Jugadores', icon:'add', url:'./jugadores'},
    {label:'Buscar', icon:'search', url:'./search'},
  ]
}


