import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label:'Listado', icon:'label', url:'./list'},
    {label:'Jugadores', icon:'add', url:'./:id'},
    {label:'Buscar', icon:'search', url:'./search'},
    {label:'Equipos', icon:'user', url:'./equipos'},
  ]
}
