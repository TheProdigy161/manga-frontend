import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manga } from 'src/app/models/manga.model';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-manga-view',
  templateUrl: './manga-view.component.html',
  styleUrls: ['./manga-view.component.scss']
})
export class MangaViewComponent {
  @Input()
  manga: Manga | null;

  constructor(private route: ActivatedRoute, private router: Router, private mangaService: MangaService) {
    const id: string | null = this.route.snapshot.paramMap.get('id');

    if (id == null) {
      this.redirect();
    } else {
      this.mangaService.getById(id)
        .then((res) => {
          if (res) {
            this.manga = res;
          } else {
            this.redirect();
          }
        });;
    }
  }

  redirect() {
    this.router.navigateByUrl('')
  }
}
