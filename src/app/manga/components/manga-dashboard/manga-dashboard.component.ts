import { Component } from '@angular/core';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-manga-dashboard',
  templateUrl: './manga-dashboard.component.html',
  styleUrls: ['./manga-dashboard.component.scss']
})
export class MangaDashboardComponent {
  $getAll = this.mangaService.get();

  constructor(private mangaService: MangaService) { }
}
