import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ConfigValues } from 'src/assets/config/config-values';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService extends ConfigValues {

  constructor(private http: HttpClient) {
    super();
  }

  async loadAppConfig() {
    const $config = this.http.get<ConfigValues>('/assets/config/config.dev.json');

    const data: ConfigValues | undefined = await lastValueFrom($config);

    if (data) {
      await this.set(data);
    } else {
      console.error('Failed to load config.');
    }
  }

  private async set(values: ConfigValues): Promise<void> {
    this.baseUrl = values.baseUrl;
  }
}
