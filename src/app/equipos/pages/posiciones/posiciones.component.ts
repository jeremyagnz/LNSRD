import { Component } from '@angular/core';

const ELEMENT_DATA: any[] = [
  {image: 'assets/equipos/Titanes.jpg', juegos: '1', ganados: 1,perdidos:0, PCT: '1000', DIF: '0'},
  {image: 'assets/equipos/EXTRA OLD.jpg', juegos: '1', ganados: 1,perdidos:0, PCT: '1000', DIF: '0'},
  {image: 'assets/equipos/Clasicos ST.jpg', juegos: '1', ganados: 1,perdidos:0, PCT: '1000', DIF: '0'},
  {image: 'assets/equipos/Bad Boys.jpg', juegos: '1', ganados: '-',perdidos:'-', PCT: '-', DIF: '0'},
  {image: 'assets/equipos/Exoticos ST.jpg', juegos: '1', ganados: '-',perdidos:'-', PCT: '-', DIF: '0'},
  {image: 'assets/equipos/RAAS GROUP ST.jpg', juegos: '1', ganados: 0,perdidos:1, PCT: '0', DIF: '1'},
  {image: 'assets/equipos/Hangover.jpg', juegos: '1', ganados: 0,perdidos:1 ,PCT: '0', DIF: '1'},
  {image: 'assets/equipos/Team Rulay.jpg', juegos: '1', ganados: 0,perdidos:1,PCT: '0', DIF: '1'},

];

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})



export class PosicionesComponent {


  displayedColumns: string[] = ['image', 'juegos', 'ganados', 'perdidos', 'PCT','DIF'];
  dataSource = ELEMENT_DATA;

  getColorClass(element: any): string {
    // Obtén el nombre de la imagen desde la URL
    const imageName = element.image.split('/').pop().split('.')[0];
    // Define una clase CSS condicional basada en el nombre de la imagen
    switch (imageName) {
      case 'Titanes':
        return 'bg-titanes';
      case 'EXTRA OLD':
        return 'bg-extra-old';
      case 'Clasicos ST':
        return 'bg-clasicos-st';
      case 'Bad Boys':
        return 'bg-badboys';
      case 'Exoticos ST':
        return 'bg-exoticos-st';
      case 'RAAS GROUP ST':
        return 'bg-raas-st';
      case 'Hangover':
        return 'bg-hangover';
      case 'Team Rulay':
        return 'bg-Team-Rulay';

      default:
        return 'bg-default';
    }
  }
}
