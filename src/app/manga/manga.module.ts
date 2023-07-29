import { NgModule } from '@angular/core';

import { MangaDashboardComponent } from './components/manga-dashboard/manga-dashboard.component';
import { MangaCreateComponent } from './components/manga-create/manga-create.component';
import { MangaUpdateComponent } from './components/manga-update/manga-update.component';
import { MangaRoutingModule } from './manga-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';


@NgModule({
  declarations: [
    MangaDashboardComponent,
    MangaCreateComponent,
    MangaUpdateComponent
  ],
  imports: [
    MaterialModule,
    MangaRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class MangaModule { }
