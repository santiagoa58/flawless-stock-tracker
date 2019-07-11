import { Reducer } from 'redux';

import { TimeSeriesAction, TIME_SERIES_ACTIONS_TYPES } from '../actions';
import {
  TimeSeriesState,
  timeSeriesDefaultState,
} from '../states/time-series-state';

export const timeSeriesReducer: Reducer<TimeSeriesState, TimeSeriesAction> = (
  state: TimeSeriesState = timeSeriesDefaultState,
  { type, payload, error }: TimeSeriesAction
): TimeSeriesState => {
  const {
    SET_TIME_SERIES,
    SET_TIME_SERIES_ERROR,
    GET_TIME_SERIES,
  } = TIME_SERIES_ACTIONS_TYPES;
  switch (type) {
    case SET_TIME_SERIES:
      return { ...state, timeSeries: payload, isLoading: false };
    case SET_TIME_SERIES_ERROR:
      return { ...state, error: error, isLoading: false };
    case GET_TIME_SERIES:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
