import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import { loggerInterceptor } from './logger.interceptor';
import { errorInterceptor } from './error.interceptor';
import { headerInterceptor } from './header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideClientHydration(), provideHttpClient(withInterceptors([errorInterceptor,headerInterceptor]))]
};
