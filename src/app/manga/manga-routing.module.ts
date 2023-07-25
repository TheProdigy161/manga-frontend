import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaDashboardComponent } from './components/manga-dashboard/manga-dashboard.component';
import { MangaCreateComponent } from './components/manga-create/manga-create.component';
import { MangaUpdateComponent } from './components/manga-update/manga-update.component';

const routes: Routes = [
  { path: '', component: MangaDashboardComponent },
  { path: 'add', component: MangaCreateComponent },
  { path: 'edit', component: MangaUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangaRoutingModule { }
