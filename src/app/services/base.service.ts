import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './appconfig.service';
import { Observable, lastValueFrom, catchError  } from 'rxjs';
import { CreateManga, Manga } from '../models/manga.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  protected url: string;

  constructor(protected http: HttpClient) { }

  get(page: number, pageSize: number = 10): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/paginated?page=${page}&pageSize=${pageSize}`);
  }
  
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}`);
  }

  async getById(id: string): Promise<T | null> {
    const $get = this.http.get<T | null>(`${this.url}/${id}`);

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

  async create(data: any): Promise<T> {
    const $create = this.http.post<T>(this.url, data);

    const createSuccess = await lastValueFrom($create)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err.error);
        return data as T;
      });

    return createSuccess;
  }

  async update(data: T): Promise<boolean> {
    const $update = this.http.put(this.url, data);

    const updateSuccess = await lastValueFrom($update)
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.error(err.error);
        return false;
      });

    return updateSuccess;
  }
}
