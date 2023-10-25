import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EquiposService } from '../../services/equipos.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {


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
