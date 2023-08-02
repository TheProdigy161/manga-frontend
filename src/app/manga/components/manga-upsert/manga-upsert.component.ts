import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateManga, Manga } from 'src/app/models/manga.model';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-manga-upsert',
  templateUrl: './manga-upsert.component.html',
  styleUrls: ['./manga-upsert.component.scss']
})
export class MangaUpsertComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    releaseDate: new FormControl('2023-07-29', Validators.required),
    finishedDate: new FormControl(),
  });

  constructor(private mangaService: MangaService, private toast: MatSnackBar) { }

  async onSubmit(): Promise<void> {
    if (this.isCreate()) {
      await this.create();
    } else {
      await this.update();
    }
  }

  async create(): Promise<void> {
    const createRes = await this.mangaService.create(new CreateManga(this.form.value));

    if (createRes.id) {
      this.form.setValue(createRes);
      this.toast.open('Manga created', 'Close');
    } else {
      this.toast.open('Failed to create manga', 'Close');
    }
  }

  async update(): Promise<void> {
    const updateRes = await this.mangaService.update(new Manga(this.form.value));

    if (updateRes) {
      this.toast.open('Manga updated', 'Close');
    } else {
      this.toast.open('Failed to update manga', 'Close');
    }
  }

  isCreate() {
    return !this.form.value.id;
  }

  getSubmitButtonText() {
    return this.isCreate() ? 'Create' : 'Update';
  }
}
