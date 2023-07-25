import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaRoutingModule } from './manga-routing.module';
import { MangaDashboardComponent } from './components/manga-dashboard/manga-dashboard.component';
import { MangaCreateComponent } from './components/manga-create/manga-create.component';
import { MangaUpdateComponent } from './components/manga-update/manga-update.component';


@NgModule({
  declarations: [
    MangaDashboardComponent,
    MangaCreateComponent,
    MangaUpdateComponent
  ],
  imports: [
    CommonModule,
    MangaRoutingModule
  ]
})
export class MangaModule { }
