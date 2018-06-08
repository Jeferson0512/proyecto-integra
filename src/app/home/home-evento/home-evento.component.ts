import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { Evento } from '../../models/evento';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-home-evento',
  templateUrl: './home-evento.component.html',
  styleUrls: ['./home-evento.component.css']
})
export class HomeEventoComponent implements OnInit {

  eventoAll: Observable<Evento[]>;

  constructor(public paisService: PaisService) { }

  ngOnInit() {
    this.eventoAll = this.paisService.getEventoAll();
  }

}
