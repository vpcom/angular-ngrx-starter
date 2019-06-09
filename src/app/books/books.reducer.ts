
import { BooksActions, BooksActionTypes } from './books.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: BooksActions): State {
  switch (action.type) {

    case BooksActionTypes.LoadBooks:
      return state;

    case BooksActionTypes.LoadBooksSuccess:
      return state;

    case BooksActionTypes.LoadBooksFailure:
      return state;

    default:
      return state;
  }
}
