import { Reducer } from 'redux';

import { OverviewAction } from '../actions';
import { OverviewState, overviewDefaultState } from '../states';

export const overviewReducer: Reducer<OverviewState, OverviewAction> = (
  state: OverviewState = overviewDefaultState,
  { type, payload, error }: OverviewAction
): OverviewState => {
  switch (type) {
    case 'SET_OVERVIEW':
      return { ...state, overview: payload, isLoading: false };
    case 'SET_OVERVIEW_ERROR':
      return { ...state, error: error, isLoading: false };
    case 'GET_OVERVIEW':
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
