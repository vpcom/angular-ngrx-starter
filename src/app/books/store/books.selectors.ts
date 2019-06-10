import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookState } from './books.reducer';


export const selectBooksState = createFeatureSelector<BookState>("books");

// TODO add more selectors to provide the UI with a convenient array.
export const selectBooksEntities = createSelector(
  selectBooksState,
  (bookState: BookState) => bookState.entities
);
