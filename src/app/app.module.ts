import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import { ListPageComponent } from './list-page/list-page.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '',
      redirectUri: 'http://localhost:4200'
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
