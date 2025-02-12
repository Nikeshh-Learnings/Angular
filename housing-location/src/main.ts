import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err) => console.error(err));
