import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './appconfig.service';
import { Observable, lastValueFrom, catchError  } from 'rxjs';
import { CreateManga, Manga } from '../models/manga.model';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private mangaUrl: string;

  constructor(private config: AppConfigService, private http: HttpClient) {
    this.mangaUrl = `${this.config.baseUrl}/manga`;
  }

  get(): Observable<Manga[]> {
    return this.http.get<Manga[]>(this.mangaUrl);
  }

  async create(data: CreateManga): Promise<boolean> {
    const options = { responseType: 'text' as 'json' };

    const $create = this.http.post(this.mangaUrl, data, options);

    const createSuccess = await lastValueFrom($create)
      .then((res) => {
        return true;
      })
      .catch((err) => {
        console.error(err.error);
        return false;
      });

    return createSuccess;
  }

  async update(data: Manga): Promise<boolean> {
    const $update = this.http.put<boolean>(this.mangaUrl, data);
    const updateSuccess = await lastValueFrom($update);
    return updateSuccess;
  }
}
