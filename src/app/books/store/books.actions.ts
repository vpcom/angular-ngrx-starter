import { Action } from '@ngrx/store';
import { Book } from '../books.model';
import { Update } from '@ngrx/entity';


export enum BookActionTypes {
  LoadBooks = '[Books] Load Books',
  LoadBooksSuccess = '[Books] Load Books Success',
  LoadBooksFailure = '[Books] Load Books Failure',
  AddBook = '[Book] Add Book',
  UpsertBook = '[Book] Upsert Book',
  AddBooks = '[Book] Add Books',
  UpsertBooks = '[Book] Upsert Books',
  UpdateBook = '[Book] Update Book',
  UpdateBooks = '[Book] Update Books',
  UpdateBookSuccess = '[Book] Update Book Success',
  UpdateBookFailure = '[Book] Update Book Failure',
  DeleteBook = '[Book] Delete Book',
  DeleteBookSuccess = '[Book] Delete Book Success',
  DeleteBookFailure = '[Book] Delete Book Failure',
  DeleteBooks = '[Book] Delete Books',
  ClearBooks = '[Book] Clear Books',
  SavingBooks =  '[Book] Saving Books',
}

// Used to reach an effect that loads data from server.
export class LoadBooks implements Action {
  readonly type = BookActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BookActionTypes.LoadBooksSuccess;
  constructor(public payload: { data: any }) { 
    console.log(payload);
  }
}

export class LoadBooksFailure implements Action {
  readonly type = BookActionTypes.LoadBooksFailure;
  constructor(public payload: { error: any }) { }
}

export class AddBook implements Action {
  readonly type = BookActionTypes.AddBook;

  constructor(public payload: { book: Book }) {}
}

export class UpsertBook implements Action {
  readonly type = BookActionTypes.UpsertBook;

  constructor(public payload: { book: Book }) {}
}

export class AddBooks implements Action {
  readonly type = BookActionTypes.AddBooks;

  constructor(public payload: { books: Book[] }) {}
}

export class UpsertBooks implements Action {
  readonly type = BookActionTypes.UpsertBooks;

  constructor(public payload: { books: Book[] }) {}
}

export class UpdateBook implements Action {
  readonly type = BookActionTypes.UpdateBook;

  constructor(public payload: { book: Update<Book> }) {
    console.log(payload);}
}

export class UpdateBookSuccess implements Action {
  readonly type = BookActionTypes.UpdateBookSuccess;
  
  constructor(public payload: { book: Update<Book> }) {
    console.log(payload);
  }
}

export class UpdateBookFailure implements Action {
  readonly type = BookActionTypes.UpdateBookFailure;
  
  constructor(public payload: { error: any }) { }
}

export class UpdateBooks implements Action {
  readonly type = BookActionTypes.UpdateBooks;

  constructor(public payload: { books: Update<Book>[] }) {}
}

export class DeleteBook implements Action {
  readonly type = BookActionTypes.DeleteBook;

  constructor(public payload: { id: string }) {}
}

export class DeleteBookSuccess implements Action {
  readonly type = BookActionTypes.DeleteBookSuccess;
  
  constructor(public payload: { id: string }) { }
}

export class DeleteBookFailure implements Action {
  readonly type = BookActionTypes.DeleteBookFailure;
  
  constructor(public payload: { error: any }) { }
}

export class DeleteBooks implements Action {
  readonly type = BookActionTypes.DeleteBooks;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearBooks implements Action {
  readonly type = BookActionTypes.ClearBooks;
}

export class SavingBooks implements Action {
  readonly type = BookActionTypes.SavingBooks;

  constructor(public isSaving: boolean) {}
}

export type BooksActions = LoadBooks | LoadBooksSuccess | LoadBooksFailure
| AddBook
| UpsertBook
| AddBooks
| UpsertBooks
| UpdateBook | UpdateBookSuccess | UpdateBookFailure
| UpdateBooks
| DeleteBook | DeleteBookSuccess | DeleteBookFailure
| DeleteBooks
| ClearBooks
| SavingBooks;

