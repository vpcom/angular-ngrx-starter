import { Action } from '@ngrx/store';

export enum LocalStorageActionTypes {
  CHECK_INIT = '[LocalStorage] CHECK_INIT',
  INIT = '[LocalStorage] INIT',
  INIT_SUCCESS = '[LocalStorage] Init Success',
  INIT_FAILURE = '[LocalStorage] Init Failure'
}

export class ActionLocalStorageInit implements Action {
  readonly type = LocalStorageActionTypes.INIT;
}
export class LocalStorageInitSuccess implements Action {
  readonly type = LocalStorageActionTypes.INIT_SUCCESS;
}
export class LocalStorageInitFailure implements Action {
  readonly type = LocalStorageActionTypes.INIT_FAILURE;
  constructor(public payload: { error: any }) { }
}

export class ActionLocalStorageCheckInit implements Action {
  readonly type = LocalStorageActionTypes.CHECK_INIT;
}

export type LocalStorageActions =
  ActionLocalStorageInit | 
  LocalStorageInitSuccess |
  LocalStorageInitFailure |
  ActionLocalStorageCheckInit;
