import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Authors } from './authors.model';
import { AuthorsActions, AuthorsActionTypes } from './authors.actions';

export interface State extends EntityState<Authors> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Authors> = createEntityAdapter<Authors>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: AuthorsActions
): State {
  switch (action.type) {
    case AuthorsActionTypes.AddAuthors: {
      return adapter.addOne(action.payload.authors, state);
    }

    case AuthorsActionTypes.UpsertAuthors: {
      return adapter.upsertOne(action.payload.authors, state);
    }

    case AuthorsActionTypes.AddAuthorss: {
      return adapter.addMany(action.payload.authorss, state);
    }

    case AuthorsActionTypes.UpsertAuthorss: {
      return adapter.upsertMany(action.payload.authorss, state);
    }

    case AuthorsActionTypes.UpdateAuthors: {
      return adapter.updateOne(action.payload.authors, state);
    }

    case AuthorsActionTypes.UpdateAuthorss: {
      return adapter.updateMany(action.payload.authorss, state);
    }

    case AuthorsActionTypes.DeleteAuthors: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AuthorsActionTypes.DeleteAuthorss: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AuthorsActionTypes.LoadAuthorss: {
      return adapter.addAll(action.payload.authorss, state);
    }

    case AuthorsActionTypes.ClearAuthorss: {
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
