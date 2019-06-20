import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../app.angular.material.module';

import { BooksRoutingModule } from './books-routing.module';
import { BooksContainerComponent } from './books-container/books-container.component';
import * as fromBooks from './store/books.reducer';
import { BooksEffects } from './store/books.effects';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [
    BooksContainerComponent,
    BookDetailsComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    MaterialModule,
    
    StoreModule.forFeature('books', fromBooks.reducer),
    EffectsModule.forFeature([BooksEffects]),
  ]
})
export class BooksModule { }
