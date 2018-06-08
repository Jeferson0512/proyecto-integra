import {Routes, RouterModule, RouterEvent } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { EquiposComponent } from './home/equipos/equipos.component';
import { PartidosComponent } from './home/partidos/partidos.component';
import { NoticiasComponent } from './home/noticias/noticias.component';
import { HomeEventoComponent } from './home/home-evento/home-evento.component';
import { NoticiaImageComponent } from './home/noticias/noticia-list/noticia-image.component';
import { EventoImageComponent } from './home/home-evento/evento-list/evento-image.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'equipos', component: EquiposComponent },
    { path: 'partidos', component: PartidosComponent },
    { path: 'noticia', component: NoticiasComponent},
    { path: 'noticia/:id', component: NoticiaImageComponent},
    { path: 'evento', component: HomeEventoComponent},
    { path: 'evento/:id', component: EventoImageComponent}

  ];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);