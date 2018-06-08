import { Injectable } from '@angular/core';
import { Pais } from '../models/pais';
import { Noticia } from '../models/noticia';
import { Evento } from '../models/evento';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Categoria } from '../models/categoria';

@Injectable()
export class PaisService {
  
  constructor(private http:Http) { }

  getPais(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/mirar-pais').map((response: Response) => response.json());
  }
  
  getNoticia(): Observable<Noticia[]>{
    return this.http.get('http://18.228.37.198/api/mirar-noticia').map((response: Response) => response.json());
  }

  getNoticiaImage(id: string): Observable<Noticia[]>{
    return this.http.get('http://18.228.37.198/api/ver-noticia/'+id).map((response: Response) => response.json());
  }

  getNoticiaLongitud(): Observable<Noticia[]>{
    return this.http.get('http://18.228.37.198/api/longitud-noticia').map((response: Response) => response.json());
  }

  getEventImage(id :string): Observable<Evento[]>{
    return this.http.get('http://18.228.37.198/api/ver-evento/'+id).map((response: Response) => response.json());
  }

  getEventoAll(): Observable<Evento[]>{
    return this.http.get('http://18.228.37.198/api/mirar-all-evento').map((response: Response) => response.json());
  }
  
  getEvento(): Observable<Evento[]>{
    return this.http.get('http://18.228.37.198/api/mirar-evento').map((response: Response) => response.json());
  }

  getEventoLongitud(): Observable<Evento[]>{
    return this.http.get('http://18.228.37.198/api/longitud-evento').map((response: Response) => response.json());
  }

  getCategoria(): Observable<Categoria[]>{
    return this.http.get('http://18.228.37.198/api/mirar-categoria').map((response: Response) => response.json());
  }
  
  getPaisAnfitrion(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/anfitrion').map((response: Response) => response.json());
  }

  getPaisAfrica(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/africa').map((response: Response) => response.json());
  }

  getPaisSudamerica(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/sudamerica').map((response: Response) => response.json());
  }

  getPaisAsia(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/asia').map((response: Response) => response.json());
  }

  getPaisConcacaf(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/concacaf').map((response: Response) => response.json());
  }

  getPaisEuropa(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/europa').map((response: Response) => response.json());
  }

  getGrupoA(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/grupoA').map((response: Response) => response.json());
  }

  getGrupoB(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/grupoB').map((response: Response) => response.json());
  }

  getGrupoC(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/grupoC').map((response: Response) => response.json());
  }

  getGrupoD(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/grupoD').map((response: Response) => response.json());
  }

  getGrupoE(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/grupoE').map((response: Response) => response.json());
  }

  getGrupoF(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/grupoF').map((response: Response) => response.json());
  }

  getGrupoG(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/grupoG').map((response: Response) => response.json());
  }

  getGrupoH(): Observable<Pais[]>{
    return this.http.get('http://18.228.37.198/api/grupoH').map((response: Response) => response.json());
  }

}
