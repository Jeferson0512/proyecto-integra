import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../../../models/noticia';

@Component({
  selector: 'app-noticia-list',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.css']
})
export class NoticiaListComponent implements OnInit {

  @Input() noticia: Noticia[];

  constructor() { }

  ngOnInit() {
  }

}
