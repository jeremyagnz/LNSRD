import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Equipos } from '../interfaces/equipos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient ) { }


  getEquipos():Observable<Equipos[]>{
    return this.http.get<Equipos[]>(`${this.baseUrl}/equipo`);
  }
}
