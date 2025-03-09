import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './appconfig.service';
import { lastValueFrom  } from 'rxjs';
import { CreateManga } from '../models/manga.model';
import { Register } from '../models/register.model';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl: string;

  constructor(private config: AppConfigService, private http: HttpClient, private localStorage: LocalstorageService) {
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

  // Login user and save access token and refresh token to local storage.
  async login(data: CreateManga): Promise<boolean> {
    const $login = this.http.post<any>(`${this.authUrl}/login`, data);

    const loginSuccess = await lastValueFrom($login)
      .then((res) => {
        this.localStorage.save('access_token', res.accessToken);
        this.localStorage.save('refresh_token', res.refreshToken);
        this.startTokenExpiry(res.expiresIn);

        return true;
      })
      .catch((err) => {
        console.error(err.error);
        return false;
      });

    return loginSuccess;
  }

  async logout(): Promise<void> {
    this.localStorage.remove('access_token');
    this.localStorage.remove('refresh_token');
  }

  // Refresh access token using refresh token.
  async refreshToken(): Promise<boolean> {
    const $refresh = this.http.post<any>(`${this.authUrl}/refresh`, {
      refreshToken: this.localStorage.get('refresh_token')
    });

    const refreshSuccess = await lastValueFrom($refresh)
      .then((res) => {
        this.localStorage.save('access_token', res.accessToken);
        this.localStorage.save('refresh_token', res.refreshToken);

        return true;
      })
      .catch((err) => {
        console.error(err.error);
        return false;
      });

    return refreshSuccess;
  }

  // Start token expiry interval to keep track of token expiry.
  startTokenExpiry(expiry: string): void {
    // Save token expiry to local storage and subtract 60 seconds to ensure token is removed before it expires.
    this.localStorage.save('token_expiry', (parseInt(expiry) - 60).toString());

    let expiryInterval = setInterval(() => {
      let currentExpiry = parseInt(this.localStorage.get('token_expiry'));

      // Check if expiry is less than or equal to 0. If so we need to remove access token and clear interval.
      if (currentExpiry <= 0) {
        this.localStorage.remove('access_token');
        clearInterval(expiryInterval);
      }

      this.localStorage.save('token_expiry', (currentExpiry - 1).toString());
    }, 1000);
  }

  // Check if access token exists and if token expiry is greater than 0.
  isAuthenticated(): boolean {
    return this.localStorage.get('access_token') !== null && this.localStorage.get('token_expiry') !== null && parseInt(this.localStorage.get('token_expiry')) > 0;
  }
}
