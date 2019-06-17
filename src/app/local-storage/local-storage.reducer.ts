import { LocalStorageActions, LocalStorageActionTypes } from './local-storage.actions';


export interface LocalStorageState {
  isInit: boolean;
  error: string;
}

export const initialState: LocalStorageState = {
  isInit: false,
  error: undefined
};

export function reducer(
  state: LocalStorageState = initialState,
  action: LocalStorageActions
): LocalStorageState {
  switch (action.type) {
    case LocalStorageActionTypes.INIT:
      return { ...state };

    case LocalStorageActionTypes.INIT_SUCCESS:
      return { ...state, isInit: true };
  
    case LocalStorageActionTypes.INIT_FAILURE:
      return { ...state, error: action.payload.error };
        
    case LocalStorageActionTypes.CHECK_INIT:
      return { ...state, isInit: false };

    default:
      return state;
  }
}
