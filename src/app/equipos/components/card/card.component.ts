import { Component, Input, OnInit } from '@angular/core';
import { Equipos } from '../../interfaces/equipos.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'equipos-equipo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public equipo!: any;

  constructor( private activatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    if(!this.equipo) throw Error('Hero property is required')
  }

  onClick(){

  }
}
