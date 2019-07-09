import { Reducer } from 'redux';
import { OverviewAction } from '../actions/overview-actions';
import { Overview } from '../util';

export interface OverviewState {
  overview: Overview;
  error: string | undefined;
  isLoading: boolean;
}

export const overviewState: OverviewState = {
  overview: {} as Overview,
  error: undefined,
  isLoading: false,
};

export type OverviewReducer = Reducer<OverviewState, OverviewAction>;

export const overviewReducer: OverviewReducer = (
  state: OverviewState = overviewState,
  { type, payload }: OverviewAction
): OverviewState => {
  switch (type) {
    case 'SET_OVERVIEW':
      return { ...state, overview: payload, isLoading: false };
    case 'SET_OVERVIEW_ERROR':
      return { ...state, error: payload, isLoading: false };
    case 'GET_OVERVIEW':
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
