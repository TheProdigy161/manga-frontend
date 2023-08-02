import { Component, Input } from '@angular/core';
import { Manga } from 'src/app/models/manga.model';

@Component({
  selector: 'app-manga-tile',
  templateUrl: './manga-tile.component.html',
  styleUrls: ['./manga-tile.component.scss']
})
export class MangaTileComponent {
  @Input()
  manga: Manga;
}
