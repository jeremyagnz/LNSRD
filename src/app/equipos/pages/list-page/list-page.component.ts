import { Component, OnInit } from '@angular/core';
import { Equipos } from '../../interfaces/equipos.interfaces';
import { EquiposService } from '../../services/equipos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  public equipos:Equipos[] = [];

  constructor(
    private equiposService:EquiposService,
    private activatedRoute:ActivatedRoute,
    ){}

  ngOnInit() {

    this.equiposService.getTeams()
      .subscribe(data => {
        this.equipos = data;
      });



      /* this.equiposService.getPlayers()
        .subscribe(name => this.equipos = name); */
  }

/*   getid(){
    console.log(this.equipos);
  } */

}
