import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadBooksFailure, LoadBooksSuccess, BookActionTypes, BooksActions, UpdateBookSuccess } from './books.actions';
import { BooksService } from '../../services/books.service';
import { Update } from '@ngrx/entity';
import { Book } from '../books.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Injectable()
export class BooksEffects {

  constructor(private actions$: Actions<BooksActions>,
              private booksService: BooksService,
              public store: Store<AppState>) {}

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    switchMap(() => this.booksService.getAllBooks()
      .pipe(
        tap(data =>   console.log(data)),
        map(books => new LoadBooksSuccess({data: books})),
        catchError(error => of(new LoadBooksFailure(error))),
      ),
    ),
  );

  @Effect()
  updateBook$ = this.actions$.pipe(
    ofType(BookActionTypes.UpdateBook),
    tap(data =>   console.log(data)),
    switchMap(book => this.booksService.updateBook(book.payload.book.changes)
      .pipe(
        map(book => {
          const bookUpdate: Update<Book> = {
            id: book.id,
            changes: book
          };
          return new UpdateBookSuccess({book: bookUpdate})
        }),
        catchError(error => of(new LoadBooksFailure(error))),
      )
    ),
  );
}
