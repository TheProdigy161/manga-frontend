import { Component, HostListener } from '@angular/core';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-manga-dashboard',
  templateUrl: './manga-dashboard.component.html',
  styleUrls: ['./manga-dashboard.component.scss']
})
export class MangaDashboardComponent {
  isLoading = true;
  $getAll = this.mangaService.get();
  imageWidth = 200;
  imageHeight = 270;
  columnNum = 0;

  constructor(private mangaService: MangaService) {
    this.onResize();

    this.$getAll.subscribe(() => {
      this.isLoading = false;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calcuateNumberOfColumns(window.innerWidth);
  }

  calcuateNumberOfColumns(width: number): void {
    const num = Math.round(width / this.imageWidth);
    this.columnNum = num;
  }
}
