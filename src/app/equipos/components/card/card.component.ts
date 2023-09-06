import { Component, Input, OnInit } from '@angular/core';
import { Equipos } from '../../interfaces/equipos.interfaces';

@Component({
  selector: 'equipos-equipo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public equipo!: Equipos;


  ngOnInit(): void {
    if(!this.equipo) throw Error('Hero property is required')
  }

  onClick(){
    console.log('clicked');
  }
}
