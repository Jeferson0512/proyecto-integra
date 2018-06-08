import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { Evento } from '../../models/evento';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Input() longitudEvento: Evento;
  @Input() longitudNoticia: Noticia;

  constructor() { }

  ngOnInit() {
  }

}
