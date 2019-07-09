import { Reducer } from 'redux';
import { TimeSeriesAction } from '../actions/time-series-actions';
import { TimeSeries } from '../util';
import {
  SET_TIME_SERIES,
  SET_TIME_SERIES_ERROR,
  GET_TIME_SERIES,
} from '../actions/constants';

export interface TimeSeriesState {
  timeSeries: TimeSeries;
  error: string | undefined;
  isLoading: boolean;
}

export const TimeSeriesState: TimeSeriesState = {
  timeSeries: undefined,
  error: undefined,
  isLoading: false,
};

export const timeSeriesReducer: Reducer<TimeSeriesState, TimeSeriesAction> = (
  state: any = TimeSeriesState,
  { type, payload }: TimeSeriesAction
): TimeSeriesState => {
  switch (type) {
    case SET_TIME_SERIES:
      return { ...state, timeSeries: payload, isLoading: false };
    case SET_TIME_SERIES_ERROR:
      return { ...state, error: payload, isLoading: false };
    case GET_TIME_SERIES:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
