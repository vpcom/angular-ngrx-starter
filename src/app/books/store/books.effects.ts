import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, delay, switchMap, tap, startWith } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadBooksFailure, LoadBooksSuccess, BookActionTypes, BooksActions, LoadBooks } from './books.actions';
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
    // The startWith operator starts the stream imediately from this point
    startWith(null),
    switchMap(() =>
      // Calls the service and triggers the response storage
      this.booksService.getAllBooks().pipe(
        delay(1000),
        map(books => new LoadBooksSuccess({data: books})),
        catchError(error => of(new LoadBooksFailure(error))),
      ),
    ),
  );

}
