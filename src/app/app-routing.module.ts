import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'manga', loadChildren: () => import('./manga/manga.module').then(m => m.MangaModule) },
  { path: '**', redirectTo: 'manga' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
