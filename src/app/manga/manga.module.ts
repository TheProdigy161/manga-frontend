import { NgModule } from '@angular/core';

import { MangaDashboardComponent } from './components/manga-dashboard/manga-dashboard.component';
import { MangaUpsertComponent } from './components/manga-upsert/manga-upsert.component';
import { MangaRoutingModule } from './manga-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { MangaTileComponent } from './components/manga-tile/manga-tile.component';
import { MangaViewComponent } from './components/manga-view/manga-view.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    MangaDashboardComponent,
    MangaUpsertComponent,
    MangaTileComponent,
    MangaViewComponent
  ],
  imports: [
    CoreModule,
    MangaRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule
  ]
})
export class MangaModule { }
