import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromLocalStorage from '../local-storage/local-storage.reducer';


// Local storage selector
export const selectLocalStorageState =
  createFeatureSelector<fromLocalStorage.LocalStorageState>('localStorage');
  
export const selectLocalStorageIsInit = createSelector(
  selectLocalStorageState,
  (localStorageState: fromLocalStorage.LocalStorageState) => localStorageState.isInit
);