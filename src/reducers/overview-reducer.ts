import { Reducer } from 'redux';
import { OverviewAction } from '../actions/overview-actions';
import { Overview } from '../util/entities/overview';
import {
  SET_OVERVIEW,
  SET_OVERVIEW_ERROR,
  GET_OVERVIEW,
} from '../actions/constants';

export interface OverviewState {
  overview: Overview | undefined;
  error: string | undefined;
  isLoading: boolean;
}

export const overviewState: OverviewState = {
  overview: undefined,
  error: undefined,
  isLoading: false,
};

export const overviewReducer: Reducer<OverviewState, OverviewAction> = (
  state: any = overviewState,
  { type, payload }: OverviewAction
): OverviewState => {
  switch (type) {
    case SET_OVERVIEW:
      return { ...state, overview: payload, isLoading: false };
    case SET_OVERVIEW_ERROR:
      return { ...state, error: payload, isLoading: false };
    case GET_OVERVIEW:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
