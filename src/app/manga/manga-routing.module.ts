import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaDashboardComponent } from './components/manga-dashboard/manga-dashboard.component';
import { MangaUpsertComponent } from './components/manga-upsert/manga-upsert.component';
import { MangaViewComponent } from './components/manga-view/manga-view.component';

const routes: Routes = [
  { path: '', component: MangaDashboardComponent },
  { path: 'add', component: MangaUpsertComponent },
  { path: 'edit/:id', component: MangaUpsertComponent },
  { path: ":id", component: MangaViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangaRoutingModule { }
