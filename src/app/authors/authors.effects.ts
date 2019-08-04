import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthorActionTypes, LoadAuthorsSuccess, LoadAuthorsFailure } from './authors.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthorsService } from '../services/authors.service';
import { of } from 'rxjs';



@Injectable()
export class AuthorsEffects {

  constructor(private actions$: Actions,
    private authorsService: AuthorsService) {}

  @Effect()
  loadAuthors$ = this.actions$.pipe(
    ofType(AuthorActionTypes.LoadAuthors),
    switchMap(() => this.authorsService.getAllAuthors()
      .pipe(
        map(authors => new LoadAuthorsSuccess({data: authors})),
        catchError(error => of(new LoadAuthorsFailure(error))),
      ),
    ),
  );

}
