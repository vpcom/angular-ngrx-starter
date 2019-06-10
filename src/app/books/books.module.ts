import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksContainerComponent } from './books-container/books-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromBooks from './store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/books.effects';

@NgModule({
  declarations: [BooksContainerComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', fromBooks.reducer),
    EffectsModule.forFeature([BooksEffects]),
  ]
})
export class BooksModule { }
