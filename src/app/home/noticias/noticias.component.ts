import { Component, OnInit, Input } from '@angular/core';

import { Noticia } from '../../models/noticia';
import { PaisService } from '../../services/pais.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticia: Observable<Noticia[]>;

  constructor(public paisService: PaisService) { }

  ngOnInit() {
    this.noticia = this.paisService.getNoticia();
  }

}
