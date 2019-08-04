import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthorState } from './authors.reducer';
import { selectRouterState } from 'src/app/reducers';


export const selectAuthorsState = createFeatureSelector<AuthorState>("authors");

export const selectAuthorsEntities = createSelector(
  selectAuthorsState,
  (authorState: AuthorState) => authorState.entities
);

export const selectAuthorsArray = createSelector(
  selectAuthorsEntities,
  entities => Object.keys(entities).map(id => entities[id])
);

export const selectCurrentAuthor = createSelector(
  selectAuthorsEntities,
  selectRouterState,
  (entities, params) => params  && entities[params.state.params.id]
);

export const selectCurrentAuthorBooks = createSelector(
  selectCurrentAuthor,
  (entities, params) => params  && entities[params.state.params.id]
);

export const selectUrlAuthorIdExists = createSelector(
  selectRouterState,
  (params) => params.state.params.id
);

export const selectUrlAuthorEdit = createSelector(
  selectRouterState,
  (params) => params.state.url.endsWith('edit')
);
