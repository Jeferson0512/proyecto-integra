import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../../services/pais.service';
import { Noticia } from '../../../models/noticia';

@Component({
  selector: 'app-noticia-image',
  templateUrl: './noticia-image.component.html',
  styleUrls: ['./noticia-image.component.css']
})
export class NoticiaImageComponent implements OnInit {

  id: any;
  params: any;
  // eventoImage: Observable<Evento[]>;

  noticiaImage = new Noticia ('id','nombre_n','info_n','imagen','updated_at','created_at');

  constructor(private activatedRoute: ActivatedRoute,public paisService: PaisService) { }

  ngOnInit() {
    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    // this.eventoImage =  this.paisService.getEventImage(this.id);
    this.paisService.getNoticiaImage(this.id).subscribe(
      data=>{
        console.log(data);
        this.noticiaImage.id = data['id'];
        this.noticiaImage.nombre_n = data['nombre_n'];
        this.noticiaImage.info_n = data['info_n'];
        this.noticiaImage.imagen = data['imagen'];
        this.noticiaImage.updated_at = data['updated_at'];
        this.noticiaImage.created_at = data['created_at'];
      },
      error=> console.log(<any>error)
    );
  }
}
