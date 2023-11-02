import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EquiposService } from '../../services/equipos.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-player-page',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],

})
export class CalendarComponent {

  public searchInput =  new FormControl('');
  public players: any[] = [];
  public selectedPlayer?:any;

  constructor(private equiposService:EquiposService){}

  searchPlayer(){
    const value:string = this.searchInput.value || '';

    this.equiposService.getSuggestions( value )
      .subscribe(players => this.players = players );
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent):void{
    if(!event.option.value){
      this.selectedPlayer = undefined;
      return;
    }

    const player:any = event.option.value;
    this.searchInput.setValue( player.superhero);

    this.selectedPlayer = player;
  }

  }
