import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Book } from '../books.model';
import { BooksActions, BookActionTypes } from './books.actions';

export interface BookState extends EntityState<Book> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: BookState = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(state = initialState, action: BooksActions): BookState {
  switch (action.type) {

    case BookActionTypes.LoadBooks:
      // TODO should be called before loading the data.
      console.log("reducer")
      // TODO set loading = true;
      return state;

    case BookActionTypes.LoadBooksSuccess:
      return adapter.addAll(action.payload.data, state);

    case BookActionTypes.LoadBooksFailure:

      return state;

    case BookActionTypes.AddBook: {
      return adapter.addOne(action.payload.book, state);
    }

    case BookActionTypes.UpsertBook: {
      return adapter.upsertOne(action.payload.book, state);
    }

    case BookActionTypes.AddBooks: {
      return adapter.addMany(action.payload.books, state);
    }

    case BookActionTypes.UpsertBooks: {
      return adapter.upsertMany(action.payload.books, state);
    }

    case BookActionTypes.UpdateBook: {
      return adapter.updateOne(action.payload.book, state);
    }

    case BookActionTypes.UpdateBooks: {
      return adapter.updateMany(action.payload.books, state);
    }

    case BookActionTypes.DeleteBook: {
      return adapter.removeOne(action.payload.id, state);
    }

    case BookActionTypes.DeleteBooks: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case BookActionTypes.ClearBooks: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}
