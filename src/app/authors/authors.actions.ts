import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Author } from './authors.model';

export enum AuthorActionTypes {
  LoadAuthors = '[Author] Load Authors',
  AddAuthor = '[Author] Add Author',
  UpsertAuthor = '[Author] Upsert Author',
  AddAuthors = '[Author] Add Authors',
  UpsertAuthors = '[Author] Upsert Authors',
  UpdateAuthor = '[Author] Update Author',
  UpdateAuthors = '[Author] Update Authors',
  DeleteAuthor = '[Author] Delete Author',
  DeleteAuthors = '[Author] Delete Authors',
  ClearAuthors = '[Author] Clear Authors'
}

export class LoadAuthors implements Action {
  readonly type = AuthorActionTypes.LoadAuthors;

  constructor(public payload: { authors: Author[] }) {}
}

export class AddAuthor implements Action {
  readonly type = AuthorActionTypes.AddAuthor;

  constructor(public payload: { author: Author }) {}
}

export class UpsertAuthor implements Action {
  readonly type = AuthorActionTypes.UpsertAuthor;

  constructor(public payload: { author: Author }) {}
}

export class AddAuthors implements Action {
  readonly type = AuthorActionTypes.AddAuthors;

  constructor(public payload: { authors: Author[] }) {}
}

export class UpsertAuthors implements Action {
  readonly type = AuthorActionTypes.UpsertAuthors;

  constructor(public payload: { authors: Author[] }) {}
}

export class UpdateAuthor implements Action {
  readonly type = AuthorActionTypes.UpdateAuthor;

  constructor(public payload: { author: Update<Author> }) {}
}

export class UpdateAuthors implements Action {
  readonly type = AuthorActionTypes.UpdateAuthors;

  constructor(public payload: { authors: Update<Author>[] }) {}
}

export class DeleteAuthor implements Action {
  readonly type = AuthorActionTypes.DeleteAuthor;

  constructor(public payload: { id: string }) {}
}

export class DeleteAuthors implements Action {
  readonly type = AuthorActionTypes.DeleteAuthors;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearAuthors implements Action {
  readonly type = AuthorActionTypes.ClearAuthors;
}

export type AuthorActions =
 LoadAuthors
 | AddAuthor
 | UpsertAuthor
 | AddAuthors
 | UpsertAuthors
 | UpdateAuthor
 | UpdateAuthors
 | DeleteAuthor
 | DeleteAuthors
 | ClearAuthors;
