import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from './app.angular.material.module';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './books/books.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { appReducers, metaReducers } from './reducers';
import { AppEffects } from './app.effects';
import { CustomSerializer } from './router/custom-serializer';
import { AuthorsModule } from './authors/authors.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    MaterialModule,
    
    BooksModule,
    AuthorsModule,

    StoreModule.forRoot(appReducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // Binding to allow the store to listen to Router's Actions and format the router state
    StoreRouterConnectingModule.forRoot({
      stateKey:'router',
      serializer: CustomSerializer}),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
