import { Component, OnInit, Input } from '@angular/core';

import { Pais } from '../../../models/pais';

@Component({
  selector: 'app-grupos-list',
  templateUrl: './grupos-list.component.html',
  styleUrls: ['./grupos-list.component.css']
})
export class GruposListComponent implements OnInit {

  ip = "http://18.228.37.198";

  @Input() paisGrupoA: Pais[];
  @Input() paisGrupoB: Pais[];
  @Input() paisGrupoC: Pais[];
  @Input() paisGrupoD: Pais[];
  @Input() paisGrupoE: Pais[];
  @Input() paisGrupoF: Pais[];
  @Input() paisGrupoG: Pais[];
  @Input() paisGrupoH: Pais[];

  constructor() { }

  ngOnInit() {
  }

}
