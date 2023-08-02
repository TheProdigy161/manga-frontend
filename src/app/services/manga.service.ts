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

  async getById(id: string): Promise<Manga | null> {
    const $get = this.http.get<Manga | null>(`${this.mangaUrl}/${id}`);

    const res = await lastValueFrom($get)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err.error);
        return null;
      });

    return res;
  }

  async create(data: CreateManga): Promise<Manga> {
    const $create = this.http.post<Manga>(this.mangaUrl, data);

    const createSuccess = await lastValueFrom($create)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err.error);
        return data as Manga;
      });

    return createSuccess;
  }

  async update(data: Manga): Promise<boolean> {
    const $update = this.http.put(this.mangaUrl, data);

    const updateSuccess = await lastValueFrom($update)
      .then((res) => {
        return true;
      })
      .catch((err) => {
        console.error(err.error);
        return false;
      });

    return updateSuccess;
  }
}
