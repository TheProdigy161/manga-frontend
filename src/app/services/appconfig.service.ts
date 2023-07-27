import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigValues } from 'src/assets/config/config-values';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService extends ConfigValues {

  constructor(private http: HttpClient) {
    super();
  }

  loadAppConfig() {
    return this.http.get('/assets/config/config.dev.json')
      .toPromise()
      .then((data: any) => {
        if (data instanceof ConfigValues) {
          this.set(data);
        } else {
          console.error('Failed to load config.');
        }
      });
  }

  private set(values: ConfigValues): void {
    this.baseUrl = values.baseUrl;
  }
}
