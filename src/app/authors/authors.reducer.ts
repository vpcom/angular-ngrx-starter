import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Author } from './authors.model';
import { AuthorActions, AuthorActionTypes } from './authors.actions';

export interface State extends EntityState<Author> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Author> = createEntityAdapter<Author>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: AuthorActions
): State {
  switch (action.type) {
    case AuthorActionTypes.AddAuthor: {
      return adapter.addOne(action.payload.author, state);
    }

    case AuthorActionTypes.UpsertAuthor: {
      return adapter.upsertOne(action.payload.author, state);
    }

    case AuthorActionTypes.AddAuthors: {
      return adapter.addMany(action.payload.authors, state);
    }

    case AuthorActionTypes.UpsertAuthors: {
      return adapter.upsertMany(action.payload.authors, state);
    }

    case AuthorActionTypes.UpdateAuthor: {
      return adapter.updateOne(action.payload.author, state);
    }

    case AuthorActionTypes.UpdateAuthors: {
      return adapter.updateMany(action.payload.authors, state);
    }

    case AuthorActionTypes.DeleteAuthor: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AuthorActionTypes.DeleteAuthors: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AuthorActionTypes.LoadAuthors: {
      return adapter.addAll(action.payload.authors, state);
    }

    case AuthorActionTypes.ClearAuthors: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
