import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadBooksFailure, LoadBooksSuccess, BookActionTypes, BooksActions, UpdateBookSuccess, UpdateBookFailure, DeleteBookSuccess, DeleteBookFailure } from './books.actions';
import { BooksService } from '../../services/books.service';
import { Update } from '@ngrx/entity';
import { Book } from '../books.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectLocalStorageIsInit } from 'src/app/local-storage/local-storage.selectors';

@Injectable()
export class BooksEffects {

  constructor(private actions$: Actions<BooksActions>,
              private booksService: BooksService,
              public store: Store<AppState>) {}

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    withLatestFrom(this.store.pipe(select(selectLocalStorageIsInit))),
    switchMap(([action, isInit]) => {
      if(isInit) {
        return this.booksService.getAllBooks().pipe(
          tap(data =>   console.log(data)),
          map(books => new LoadBooksSuccess({data: books})),
          catchError(error => of(new LoadBooksFailure(error))),
        )
      } else { return of(null) }
    })
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
        catchError(error => of(new UpdateBookFailure(error))),
      )
    ),
  );

  @Effect()
  deleteBook$ = this.actions$.pipe(
    ofType(BookActionTypes.DeleteBook),
    tap(data =>   console.log(data)),
    switchMap(book => this.booksService.deleteBook(book.payload.id)
      .pipe(
        map(id => {
          return new DeleteBookSuccess({id: id})
        }),
        catchError(error => of(new DeleteBookFailure(error))),
      )
    ),
  );
}
