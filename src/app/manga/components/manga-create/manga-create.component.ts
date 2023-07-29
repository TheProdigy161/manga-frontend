import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { CreateManga, Manga } from 'src/app/models/manga.model';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-manga-create',
  templateUrl: './manga-create.component.html',
  styleUrls: ['./manga-create.component.scss']
})
export class MangaCreateComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(private mangaService: MangaService) { }

  async onSubmit() {
    const createRes = await this.mangaService.create(new CreateManga(this.form.value));

    if (createRes) {
      this.form.reset();
    }
  }
}
