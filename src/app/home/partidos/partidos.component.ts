import { Component, OnInit, Input } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Pais } from '../../models/pais';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  paisGrupoA: Observable<Pais[]>;
  paisGrupoB: Observable<Pais[]>;
  paisGrupoC: Observable<Pais[]>;
  paisGrupoD: Observable<Pais[]>;
  paisGrupoE: Observable<Pais[]>;
  paisGrupoF: Observable<Pais[]>;
  paisGrupoG: Observable<Pais[]>;
  paisGrupoH: Observable<Pais[]>;

  constructor(public paisService: PaisService) { }

  ngOnInit() {
    this.paisGrupoA = this.paisService.getGrupoA();
    this.paisGrupoB = this.paisService.getGrupoB();
    this.paisGrupoC = this.paisService.getGrupoC();
    this.paisGrupoD = this.paisService.getGrupoD();
    this.paisGrupoE = this.paisService.getGrupoE();
    this.paisGrupoF = this.paisService.getGrupoF();
    this.paisGrupoG = this.paisService.getGrupoG();
    this.paisGrupoH = this.paisService.getGrupoH();
  }

}
