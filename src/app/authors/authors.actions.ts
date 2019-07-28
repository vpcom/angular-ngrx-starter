import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Authors } from './authors.model';

export enum AuthorsActionTypes {
  LoadAuthorss = '[Authors] Load Authorss',
  AddAuthors = '[Authors] Add Authors',
  UpsertAuthors = '[Authors] Upsert Authors',
  AddAuthorss = '[Authors] Add Authorss',
  UpsertAuthorss = '[Authors] Upsert Authorss',
  UpdateAuthors = '[Authors] Update Authors',
  UpdateAuthorss = '[Authors] Update Authorss',
  DeleteAuthors = '[Authors] Delete Authors',
  DeleteAuthorss = '[Authors] Delete Authorss',
  ClearAuthorss = '[Authors] Clear Authorss'
}

export class LoadAuthorss implements Action {
  readonly type = AuthorsActionTypes.LoadAuthorss;

  constructor(public payload: { authorss: Authors[] }) {}
}

export class AddAuthors implements Action {
  readonly type = AuthorsActionTypes.AddAuthors;

  constructor(public payload: { authors: Authors }) {}
}

export class UpsertAuthors implements Action {
  readonly type = AuthorsActionTypes.UpsertAuthors;

  constructor(public payload: { authors: Authors }) {}
}

export class AddAuthorss implements Action {
  readonly type = AuthorsActionTypes.AddAuthorss;

  constructor(public payload: { authorss: Authors[] }) {}
}

export class UpsertAuthorss implements Action {
  readonly type = AuthorsActionTypes.UpsertAuthorss;

  constructor(public payload: { authorss: Authors[] }) {}
}

export class UpdateAuthors implements Action {
  readonly type = AuthorsActionTypes.UpdateAuthors;

  constructor(public payload: { authors: Update<Authors> }) {}
}

export class UpdateAuthorss implements Action {
  readonly type = AuthorsActionTypes.UpdateAuthorss;

  constructor(public payload: { authorss: Update<Authors>[] }) {}
}

export class DeleteAuthors implements Action {
  readonly type = AuthorsActionTypes.DeleteAuthors;

  constructor(public payload: { id: string }) {}
}

export class DeleteAuthorss implements Action {
  readonly type = AuthorsActionTypes.DeleteAuthorss;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearAuthorss implements Action {
  readonly type = AuthorsActionTypes.ClearAuthorss;
}

export type AuthorsActions =
 LoadAuthorss
 | AddAuthors
 | UpsertAuthors
 | AddAuthorss
 | UpsertAuthorss
 | UpdateAuthors
 | UpdateAuthorss
 | DeleteAuthors
 | DeleteAuthorss
 | ClearAuthorss;
