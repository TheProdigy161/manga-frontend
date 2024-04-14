import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { Manga } from 'src/app/models/manga.model';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-manga-dashboard',
  templateUrl: './manga-dashboard.component.html',
  styleUrls: ['./manga-dashboard.component.scss']
})
export class MangaDashboardComponent {
  mangas: Manga[] = [];
  isLoading = true;
  isDataLoading = true;
  imageWidth = 200;
  imageHeight = 270;
  columnNum = 0;
  maxScrollY = 0;

  currentPage: number = 1;
  pageSize: number = 12;

  @ViewChild('gridList') gridListElement: ElementRef;

  constructor(private mangaService: MangaService) {
    this.onResize();
    this.loadMangas();
    this.isLoading = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calcuateNumberOfColumns(window.innerWidth);
  }

  calcuateNumberOfColumns(width: number): void {
    const num = Math.round(width / this.imageWidth);
    this.columnNum = num;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    let gridOffsetHeight = this.gridListElement.nativeElement.offsetHeight;

    // Check if the scroll is going up. If not we don't need to load more data.
    if (window.scrollY <= this.maxScrollY) {
      return;
    }
    else {
      this.maxScrollY = window.scrollY;
    }

    // Only load data if scroll is at the bottom of the page
    if(window.innerHeight + window.scrollY >= gridOffsetHeight && !this.isDataLoading) {
      this.loadMangas();
    }
  }

  loadMangas() {
    this.isDataLoading = true;

    this.mangaService.get(this.currentPage, this.pageSize).subscribe((data) => {
      if (data.length > 0) { 
        this.mangas.push(...data);
        this.currentPage++;
      }

      this.isDataLoading = false;
    });
  }
}
