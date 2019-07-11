import { TIME_SERIES_ACTIONS_TYPES } from './constants';
import { TimeSeries, fetchTimeSeries, TimeSeriesRange } from '../util';
import {
  createAction,
  createThunkAction,
  ActionType,
  FetchError,
} from '../action-creators';
import { TimeSeriesState } from '../states';

export type TimeSeriesAction = ActionType<
  TIME_SERIES_ACTIONS_TYPES,
  TimeSeries
>;

export const timeSeriesActions = {
  setPayload: (type: TIME_SERIES_ACTIONS_TYPES, payload: TimeSeries) =>
    createAction({
      type,
      payload,
    }),
  setError: (type: TIME_SERIES_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  getData: (companySymbol: string, range?: TimeSeriesRange) => {
    const { setPayload, setError } = timeSeriesActions;
    createThunkAction<TimeSeriesAction, TimeSeries, TimeSeriesState>(
      fetchTimeSeries(companySymbol, range),
      setPayload,
      setError
    );
  },
};
