import { Component, OnInit, Input } from '@angular/core';

import { Pais } from '../../../models/pais';
import { PaisService } from '../../../services/pais.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styles: [`
    .col-md-8{
      padding:4% 2%;
    }
  `]
})
export class EquipoListComponent implements OnInit {

  pais: Observable<Pais[]>;
  paisAnfitrion: Observable<Pais[]>;
  paisAfrica: Observable<Pais[]>;
  paisSudamerica: Observable<Pais[]>;
  paisAsia: Observable<Pais[]>;
  paisConcacaf: Observable<Pais[]>;
  paisEuropa: Observable<Pais[]>;

  constructor(public paisService: PaisService) { }

  ngOnInit() {
    this.pais = this.paisService.getPais();
    this.paisAnfitrion = this.paisService.getPaisAnfitrion();
    this.paisAfrica = this.paisService.getPaisAfrica();
    this.paisSudamerica = this.paisService.getPaisSudamerica();
    this.paisAsia = this.paisService.getPaisAsia();
    this.paisConcacaf = this.paisService.getPaisConcacaf();
    this.paisEuropa = this.paisService.getPaisEuropa();
  }

}
