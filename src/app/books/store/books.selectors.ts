import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookState } from './books.reducer';
import { selectRouterState } from 'src/app/reducers';


export const selectBooksState = createFeatureSelector<BookState>("books");

export const selectBooksEntities = createSelector(
  selectBooksState,
  (bookState: BookState) => bookState.entities
);

export const selectBooksArray = createSelector(
  selectBooksEntities,
  entities => Object.keys(entities).map(id => entities[id])
);

export const selectCurrentBook = createSelector(
  selectBooksEntities,
  selectRouterState,
  (entities, params) => params  && entities[params.state.params.id]
);

export const selectCurrentBookAuthor = createSelector(
  selectCurrentBook,
  (entities, params) => params  && entities[params.state.params.id]
);

export const selectUrlBookIdExists = createSelector(
  selectRouterState,
  (params) => typeof params.state.params.id !== 'undefined'
);

export const selectUrlBookEdit = createSelector(
  selectRouterState,
  (params) => params.state.url.endsWith('edit')
);

export const selectBooksLoading = createSelector(
  selectBooksState,
  (bookState: BookState) => bookState.loading
);
