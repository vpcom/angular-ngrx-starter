import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../app.angular.material.module';

import { BooksRoutingModule } from './books-routing.module';
import { BooksContainerComponent } from './books-container/books-container.component';
import * as fromBooks from './store/books.reducer';
import { BooksEffects } from './store/books.effects';

@NgModule({
  declarations: [BooksContainerComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,

    MaterialModule,
    
    StoreModule.forFeature('books', fromBooks.reducer),
    EffectsModule.forFeature([BooksEffects]),
  ]
})
export class BooksModule { }
