import { createSelector, createFeatureSelector } from '@ngrx/store';
import {SearchState} from "./reducers";

export  const search = createFeatureSelector<SearchState>('search')
export const selectState = createSelector(
  search,
  (state: SearchState) => ({state: state})
)
