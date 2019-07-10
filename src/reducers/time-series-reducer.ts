import { Reducer } from 'redux';
import { TimeSeriesAction } from '../actions/time-series-actions';
import { TimeSeries } from '../util';
import {
  SET_TIME_SERIES,
  SET_TIME_SERIES_ERROR,
  GET_TIME_SERIES,
} from '../actions/constants';

export interface TimeSeriesState {
  range: TimeSeries;
  error: string | undefined;
  isLoading: boolean;
}

export const TimeSeriesState: TimeSeriesState = {
  range: undefined,
  error: undefined,
  isLoading: false,
};

export const timeSeriesReducer: Reducer<TimeSeriesState> = (
  state: any = TimeSeriesState,
  { type, payload, range }
): TimeSeriesState => {
  switch (type) {
    case SET_TIME_SERIES:
      return { ...state, [range]: payload, isLoading: false };
    case SET_TIME_SERIES_ERROR:
      return { ...state, error: payload, isLoading: false };
    case GET_TIME_SERIES:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
