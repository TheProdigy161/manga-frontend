import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaDashboardComponent } from './components/manga-dashboard/manga-dashboard.component';
import { MangaComponent } from './components/manga/manga.component';

const routes: Routes = [
  { path: '', component: MangaDashboardComponent },
  { path: 'add', component: MangaComponent },
  { path: 'edit/:id', component: MangaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangaRoutingModule { }
