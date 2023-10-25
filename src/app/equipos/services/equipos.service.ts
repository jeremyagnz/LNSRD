import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Equipos } from '../interfaces/equipos.interfaces';
import { Jugadores } from '../interfaces/jugadores.interface';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient ) { }


  getEquipos():Observable<Equipos[]>{
    return this.http.get<Equipos[]>(`${this.baseUrl}/equipo`);
  }

  getEquiposById(id:string):Observable<Equipos | undefined>{
    return this.http.get<Equipos>(`${this.baseUrl}/equipo/${ id }`)
      .pipe(
        catchError (error => of(undefined))
      );
  }

  getJugadores(id_team:string):Observable<Jugadores[]>{
    return this.http.get<Jugadores[]>(`${this.baseUrl}/jugadores/${id_team}`);
  }

  getPlayers():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/players/get`);
  }

  getTeams():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/teams/get`);
  }

  getSuggestions( query:string ):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/teams/get?q=${ query }`);
  }

}
