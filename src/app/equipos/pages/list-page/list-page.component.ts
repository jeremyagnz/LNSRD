import { Component, OnInit } from '@angular/core';
import { Equipos } from '../../interfaces/equipos.interfaces';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  public equipos:Equipos[] = [];

  constructor(private equiposService:EquiposService){}

  ngOnInit(): void {

    this.equiposService.getEquipos()
      .subscribe(equipo => this.equipos = equipo);
  }

}
