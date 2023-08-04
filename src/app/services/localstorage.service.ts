import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService<T> {

  constructor() { }

  save(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get<T>(key: string): T {
    return localStorage.getItem(key) as T;
  }
}
