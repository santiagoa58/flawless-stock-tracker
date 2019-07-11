import { Reducer } from 'redux';

import { OverviewAction, OVERVIEW_ACTIONS_TYPES } from '../actions';
import { OverviewState, overviewDefaultState } from '../states';

export const overviewReducer: Reducer<OverviewState, OverviewAction> = (
  state: OverviewState = overviewDefaultState,
  { type, payload, error }: OverviewAction
): OverviewState => {
  const { resolve, reject, get } = OVERVIEW_ACTIONS_TYPES;
  switch (type) {
    case resolve:
      return { ...state, overview: payload, isLoading: false };
    case reject:
      return { ...state, error: error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
