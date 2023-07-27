import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './appconfig.service';
import { Observable } from 'rxjs';
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
}
