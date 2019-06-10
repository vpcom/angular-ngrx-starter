import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookState } from './books.reducer';


export const selectBooksState = createFeatureSelector<BookState>("books");

export const selectBooksEntities = createSelector(
  selectBooksState,
  (bookState: BookState) => bookState.entities
);

export const selectBooksArray = createSelector(
  selectBooksEntities,
  entities => Object.keys(entities).map(id => entities[id])
);
