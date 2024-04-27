import { createFeatureSelector, createSelector } from '@ngrx/store';

const authFeatureSelector = createFeatureSelector<any>('auth');

export const loadingSelector = createSelector(
    authFeatureSelector,
    (state) => state.loading
);

export const errorSelector = createSelector(
    authFeatureSelector,
    (state) => state.error
);

export const responseSelector = createSelector(
    authFeatureSelector,
    (state) => state.response
);