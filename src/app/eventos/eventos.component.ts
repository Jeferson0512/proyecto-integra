import { Component, OnInit } from '@angular/core';

import { Evento } from './../models/evento';
import { PaisService } from '../services/pais.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Categoria } from '../models/categoria';
import { Noticia } from '../models/noticia';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  evento: Observable<Evento[]>;
  // categoria: Observable<Categoria[]>
  longitudEvento: Observable<Evento[]>
  longitudNoticia: Observable<Noticia[]>

  constructor(public paisService: PaisService) { }

  ngOnInit() {
    this.evento = this.paisService.getEvento();
    // this.categoria = this.paisService.getCategoria();
    this.longitudEvento = this.paisService.getEventoLongitud();
    this.longitudNoticia = this.paisService.getNoticiaLongitud();
  }

}
