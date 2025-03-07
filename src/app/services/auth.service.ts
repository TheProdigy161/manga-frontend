import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './appconfig.service';
import { lastValueFrom  } from 'rxjs';
import { CreateManga } from '../models/manga.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl: string;

  constructor(private config: AppConfigService, private http: HttpClient) {
    this.authUrl = `${this.config.baseUrl}/auth`;
  }

  async register(data: Register): Promise<void> {
    const $register = this.http.post<any>(`${this.authUrl}/register`, data);

    const registerSuccess = await lastValueFrom($register)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err.error);
      });

    return registerSuccess;
  }

  async login(data: CreateManga): Promise<boolean> {
    const $login = this.http.post<any>(`${this.authUrl}/login`, data);

    const loginSuccess = await lastValueFrom($login)
      .then((res) => {
        return true;
      })
      .catch((err) => {
        console.error(err.error);
        return false;
      });

    return loginSuccess;
  }
}
