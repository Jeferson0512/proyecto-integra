import { Component, OnInit, Input } from '@angular/core';

import { Evento } from './../models/evento';
import { Categoria } from '../models/categoria';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() evento: Evento;
  @Input() categoria: Categoria;

  constructor() { }

  ngOnInit() {
  }

}
