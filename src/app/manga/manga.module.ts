import { NgModule } from '@angular/core';

import { MangaDashboardComponent } from './components/manga-dashboard/manga-dashboard.component';
import { MangaComponent } from './components/manga/manga.component';
import { MangaRoutingModule } from './manga-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { MangaTileComponent } from './components/manga-tile/manga-tile.component';


@NgModule({
  declarations: [
    MangaDashboardComponent,
    MangaComponent,
    MangaTileComponent,
  ],
  imports: [
    MaterialModule,
    MangaRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class MangaModule { }
