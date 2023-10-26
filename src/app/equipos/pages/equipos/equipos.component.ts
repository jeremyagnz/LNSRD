import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquiposService } from '../../services/equipos.service';
import { switchMap } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}





@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {

  public equipo?: any;
  displayedColumns: string[] = ['BATEADORES', 'AP', 'AB', 'R','H','RBI','2B','3B','HR','BB','SO','SB','SC','SF','LOB'];

  dataSource: any[] = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    private equiposService:EquiposService,
    private router:Router
    ){}


  ngOnInit(): void {

    for (let i = 0; i < 20; i++) {
      const nuevoElemento = {
        BATEADORES: `Bateador ${i}`,
        AP: Math.floor(Math.random() * 20),  // Ejemplo: números aleatorios para AP
        AB: Math.floor(Math.random() * 20),  // Ejemplo: números aleatorios para AB
        R: Math.floor(Math.random() * 10),   // Ejemplo: números aleatorios para R
        H: Math.floor(Math.random() * 5),    // Ejemplo: números aleatorios para H
        RBI: Math.floor(Math.random() * 5),  // Ejemplo: números aleatorios para RBI
        '2B': Math.floor(Math.random() * 5),  // Ejemplo: números aleatorios para 2B
        '3B': Math.floor(Math.random() * 2),  // Ejemplo: números aleatorios para 3B
        HR: Math.floor(Math.random() * 3),   // Ejemplo: números aleatorios para HR
        BB: Math.floor(Math.random() * 5),   // Ejemplo: números aleatorios para BB
        SO: Math.floor(Math.random() * 10),  // Ejemplo: números aleatorios para SO
        SB: Math.floor(Math.random() * 3),   // Ejemplo: números aleatorios para SB
        SC: Math.floor(Math.random() * 3),   // Ejemplo: números aleatorios para SC
        SF: Math.floor(Math.random() * 3),   // Ejemplo: números aleatorios para SF
        LOB: Math.floor(Math.random() * 5)    // Ejemplo: números aleatorios para LOB
      };

      this.dataSource.push(nuevoElemento);
    }
    console.log(this.equipo);

    console.log(this.activatedRoute);
   this.activatedRoute.params
      .pipe(
        switchMap(({id})  => this.equiposService.getEquiposById(id)),
      ).subscribe( team => {
        console.log('object', team);
        if(!team) return this.router.navigate(['/inicio/equipos']);

        this.equipo = team;
        return;
      });


  }

  goBack():void{
    this.router.navigateByUrl('/teams/list')
  }
}
