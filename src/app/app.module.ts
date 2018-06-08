import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EquipoListComponent } from './home/equipos/equipo-list/equipo-list.component';
import { EquipoImageComponent } from './home/equipos/equipo-list/equipo-image.component';
import { EquiposComponent } from './home/equipos/equipos.component';
import { PartidosComponent } from './home/partidos/partidos.component';

import { routes } from './app.route';

import { PaisService } from './services/pais.service';
import { EventosComponent } from './eventos/eventos.component';
import { EventComponent } from './eventos/event.component';
import { NoticiasComponent } from './home/noticias/noticias.component';
import { NoticiaListComponent } from './home/noticias/noticia-list/noticia-list.component';
import { GruposListComponent } from './home/partidos/grupos-list/grupos-list.component';
import { CategoriasComponent } from './eventos/categorias/categorias.component';
import { HomeEventoComponent } from './home/home-evento/home-evento.component';
import { EventoListComponent } from './home/home-evento/evento-list/evento-list.component';
import { NoticiaImageComponent } from './home/noticias/noticia-list/noticia-image.component';
import { EventoImageComponent } from './home/home-evento/evento-list/evento-image.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EquipoListComponent,
    EquipoImageComponent,
    EquiposComponent,
    PartidosComponent,
    EventosComponent,
    EventComponent,
    NoticiasComponent,
    NoticiaListComponent,
    GruposListComponent,
    CategoriasComponent,
    HomeEventoComponent,
    EventoListComponent,
    NoticiaImageComponent,
    EventoImageComponent
  ],
  imports: [
    routes,
    BrowserModule,
    HttpModule
  ],
  providers: [
    PaisService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
