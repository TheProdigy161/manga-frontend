import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './appconfig.service';
import { BaseService } from './base.service';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends BaseService<Author> {

  constructor(private config: AppConfigService, http: HttpClient) {
    super(http);
    this.url = `${this.config.baseUrl}/author`;
  }
}
