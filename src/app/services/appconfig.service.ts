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
    return this.http.get<ConfigValues>('/assets/config/config.dev.json')
      .toPromise()
      .then(async (data: ConfigValues | undefined) => {
        if (data) {
          await this.set(data);
        } else {
          console.error('Failed to load config.');
        }
      });
  }

  private async set(values: ConfigValues): Promise<void> {
    this.baseUrl = values.baseUrl;
  }
}
