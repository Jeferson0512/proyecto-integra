import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../../models/evento';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {

  @Input() eventoAll: Evento[];

  constructor() { }

  ngOnInit() {
  }

}
