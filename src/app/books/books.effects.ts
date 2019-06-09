import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadBooksFailure, LoadBooksSuccess, BooksActionTypes, BooksActions } from './books.actions';




@Injectable()
export class BooksEffects {

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BooksActionTypes.LoadBooks),
    concatMap(() =>
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      EMPTY.pipe(
        map(data => new LoadBooksSuccess({ data })),
        catchError(error => of(new LoadBooksFailure({ error }))))
    )
  );



  constructor(private actions$: Actions<BooksActions>) {}

}
