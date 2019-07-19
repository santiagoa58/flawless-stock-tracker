import { TimeSeriesAction, TIME_SERIES_ACTIONS_TYPES } from '../actions';
import { timeSeriesDefaultState } from '../states';

export const timeSeriesReducer = (
  state = timeSeriesDefaultState,
  action: TimeSeriesAction
) => {
  const { resolve, reject, get } = TIME_SERIES_ACTIONS_TYPES;
  const { type, payload, error } = action;
  const key: string = action.key as string;
  switch (type) {
    case resolve:
      return { ...state, [key]: payload, isLoading: false };
    case reject:
      return { ...state, error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
