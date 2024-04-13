import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './appconfig.service';
import { Manga } from '../models/manga.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MangaService extends BaseService<Manga> {

  constructor(private config: AppConfigService, http: HttpClient) {
    super(http);
    this.url = `${this.config.baseUrl}/manga`;
  }
}
