import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './appconfig.service';
import { Observable, lastValueFrom } from 'rxjs';
import { Manga } from '../models/manga.model';

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

  async create(data: Manga): Promise<boolean> {
    const $create = this.http.post<boolean>(this.mangaUrl, data);
    const createSuccess = await lastValueFrom($create);
    return createSuccess;
  }

  async update(data: Manga): Promise<boolean> {
    const $update = this.http.put<boolean>(this.mangaUrl, data);
    const updateSuccess = await lastValueFrom($update);
    return updateSuccess;
  }
}
