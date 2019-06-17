import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadBooksFailure, LoadBooksSuccess, BookActionTypes, BooksActions } from './books.actions';
import { BooksService } from '../services/books.service';
import { Store } from '@ngrx/store';
import { BookState } from './books.reducer';

@Injectable()
export class BooksEffects {

  constructor(private actions$: Actions<BooksActions>,
              private booksService: BooksService,
              public store: Store<BookState>) {}

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    switchMap(() => this.booksService.getAllBooks()
      .pipe(
        map(books => new LoadBooksSuccess({data: books})),
        catchError(error => of(new LoadBooksFailure(error))),
      ),
    ),
  );

}
