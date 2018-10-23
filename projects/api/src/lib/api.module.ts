import { NgModule, InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken('API_URL');

@NgModule()
export class ApiModule {
  static forRoot(url: string) {
    return {
      ngModule: ApiModule,
      providers: [{
        provide: API_URL,
        useValue: url
      }]
    };
  }
}
