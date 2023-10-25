import { Pipe, PipeTransform } from '@angular/core';
import { Equipos } from '../interfaces/equipos.interfaces';

@Pipe({
  name: 'heroImage'
})
export class EquipoImagenPipe implements PipeTransform {

  transform(equipo: any): string {

    if(!equipo.name && !equipo.alt_img){
      return 'assets/no-image.png';
    }

    if(equipo.alt_img) return equipo.alt_img;

    return `assets/equipos/${equipo.name}.jpg`;
  }

}
