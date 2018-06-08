import { Component, OnInit, Input } from '@angular/core';

import { Pais } from '../../../models/pais';

@Component({
  selector: 'app-equipo-image',
  templateUrl: './equipo-image.component.html',
  styles: [`
    .title-group{
      font-weight: 700;
      font-family: monospace;
      padding: 5%;
    }
    .row-group{
      padding: 0 4%;
    }
    // .card-group{
    //   margin: 0 4%;
    //   margin-top: 5%;
    // }
    @media (min-width: 1130px){
      .card{
        width: 18rem;
      } 
      .card-group{
        margin: 0 4%;
        margin-top: 5%;
      }
  }
  `]
})
export class EquipoImageComponent implements OnInit {

  @Input() pais: Pais;
  @Input() paisAnfitrion: Pais;
  @Input() paisAfrica: Pais;
  @Input() paisSudamerica: Pais;
  @Input() paisAsia: Pais;
  @Input() paisConcacaf: Pais;
  @Input() paisEuropa: Pais;

  constructor() { }

  ngOnInit() {
  }

}
