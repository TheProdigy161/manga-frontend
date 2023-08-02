import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaDashboardComponent } from './components/manga-dashboard/manga-dashboard.component';
import { MangaUpsertComponent } from './components/manga-upsert/manga-upsert.component';

const routes: Routes = [
  { path: '', component: MangaDashboardComponent },
  { path: 'add', component: MangaUpsertComponent },
  { path: 'edit/:id', component: MangaUpsertComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangaRoutingModule { }
