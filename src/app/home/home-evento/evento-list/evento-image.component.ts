import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../../services/pais.service';
import { Evento } from '../../../models/evento';

@Component({
  selector: 'app-evento-image',
  templateUrl: './evento-image.component.html',
  styleUrls: ['./evento-image.component.css']
})
export class EventoImageComponent implements OnInit {

  id: any;
  params: any;
  // eventoImage: Observable<Evento[]>;

  eventoImage = new Evento ('id','title_event','description','img_event','fecha_event');

  constructor(private activatedRoute: ActivatedRoute,public paisService: PaisService) { }

  ngOnInit() {
    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    // this.eventoImage =  this.paisService.getEventImage(this.id);
    this.paisService.getEventImage(this.id).subscribe(
      data=>{
        console.log(data);
        this.eventoImage.id = data['id'];
        this.eventoImage.title_event = data['title_event'];
        this.eventoImage.description_event = data['description_event'];
        this.eventoImage.img_event = data['img_event'];
        this.eventoImage.fecha_event = data['fecha_event'];
      },
      error=> console.log(<any>error)
    );

  }

  ngOnDestroy() {
    this.params.unsubscribe();

  }

}
