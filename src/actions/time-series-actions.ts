import { TIME_SERIES_ACTIONS_TYPES } from './constants';
import {
  TimeSeries,
  fetchTimeSeries,
  TimeSeriesRange,
  timeSeriesFilter,
  FluxStandardAction,
  FetchError,
} from '../util';
import { createAction, createThunkAction } from '../action-creators';

export type TimeSeriesAction = FluxStandardAction<
  TIME_SERIES_ACTIONS_TYPES,
  TimeSeries,
  FetchError
>;

export const timeSeriesActions = {
  setPayload: (
    type: TIME_SERIES_ACTIONS_TYPES,
    payload: TimeSeries,
    key: string
  ) =>
    createAction({
      type,
      payload,
      key,
    }),
  setError: (type: TIME_SERIES_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: TIME_SERIES_ACTIONS_TYPES) => createAction({ type }),
  getData: (companySymbol: string, range?: TimeSeriesRange) =>
    createThunkAction(
      fetchTimeSeries(companySymbol, range, timeSeriesFilter),
      timeSeriesActions,
      TIME_SERIES_ACTIONS_TYPES,
      range
    ),
};
