import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Book } from '../books.model';
import { BooksActions, BookActionTypes } from './books.actions';

export interface BookState extends EntityState<Book> {
  savingBooks: boolean;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: BookState = adapter.getInitialState({
  savingBooks: false,
});

export function reducer(state = initialState, action: BooksActions): BookState {
  switch (action.type) {

    case BookActionTypes.LoadBooks:
      // TODO set loading = true;
      return state;
    // When the data has been retrieved, the collection is added to the state.
    case BookActionTypes.LoadBooksSuccess:
        console.log(action);
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
      console.log(action);
      //return { ...state, savingBooks: true };
      return state;
    }

    case BookActionTypes.UpdateBookSuccess: {
      console.log(state, action);
      return adapter.updateOne(action.payload.book, state);
    }
    case BookActionTypes.UpdateBookFailure: {
      return state;
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
