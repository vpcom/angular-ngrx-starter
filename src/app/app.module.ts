import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { appReducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageEffects } from './local-storage/local-storage.effects';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BooksModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // Binding to allow the store to listen to Router's Actions
    StoreRouterConnectingModule.forRoot({stateKey:'router'}),
    EffectsModule.forRoot([AppEffects, LocalStorageEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
