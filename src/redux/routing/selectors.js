import { createSelector } from 'reselect';

const selectRouting = state => state.routing;

export const selectAnimating = createSelector(
  [selectRouting],
  routing => routing.animating
)
export const selectPath = createSelector(
  [selectRouting],
  routing => routing.path
)
export const selectInitialized = createSelector(
  [selectRouting],
  routing => routing.initialized
)