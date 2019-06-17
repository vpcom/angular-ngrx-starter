import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, map, catchError, switchMap } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';

import {
  ActionLocalStorageInit,
  LocalStorageActionTypes,
  LocalStorageInitSuccess,
  LocalStorageInitFailure
} from './local-storage.actions';
import { of } from 'rxjs';
import { LocalStorageState } from './local-storage.reducer';


@Injectable()
export class LocalStorageEffects {

  constructor(private actions$: Actions<Action>,
              private localStorageService: LocalStorageService,
              public store: Store<LocalStorageState>) {}

  @Effect({ dispatch: false })
  init$ = this.actions$.pipe(
    ofType<ActionLocalStorageInit>(LocalStorageActionTypes.INIT),
    switchMap(() => this.localStorageService.init().pipe(
      map(books => this.store.dispatch(new LocalStorageInitSuccess())),
      catchError(error => {
        this.store.dispatch(new LocalStorageInitFailure(error));
        throw of(error)}),
      ),
    ),
    // tap(() => this.localStorageService.printAll()) // TODO debug only
  );

}
