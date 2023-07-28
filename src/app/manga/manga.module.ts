import { NgModule } from '@angular/core';

import { MangaRoutingModule } from './manga-routing.module';
import { MangaDashboardComponent } from './components/manga-dashboard/manga-dashboard.component';
import { MangaCreateComponent } from './components/manga-create/manga-create.component';
import { MangaUpdateComponent } from './components/manga-update/manga-update.component';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    MangaDashboardComponent,
    MangaCreateComponent,
    MangaUpdateComponent
  ],
  imports: [
    AppModule,
    MangaRoutingModule
  ]
})
export class MangaModule { }
