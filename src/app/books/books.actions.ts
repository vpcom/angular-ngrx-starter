import { Action } from '@ngrx/store';

export enum BooksActionTypes {
  LoadBooks = '[Books] Load Books',
  LoadBooksSuccess = '[Books] Load Books Success',
  LoadBooksFailure = '[Books] Load Books Failure',
}

export class LoadBooks implements Action {
  readonly type = BooksActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BooksActionTypes.LoadBooksSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadBooksFailure implements Action {
  readonly type = BooksActionTypes.LoadBooksFailure;
  constructor(public payload: { error: any }) { }
}

export type BooksActions = LoadBooks | LoadBooksSuccess | LoadBooksFailure;

