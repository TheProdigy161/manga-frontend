import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './services/appconfig.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [AppConfigService],
      multi: true,
      useFactory: (appConfigService: AppConfigService) => {
        return () => appConfigService.loadAppConfig();
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
