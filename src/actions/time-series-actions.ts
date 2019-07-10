import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionCreator } from 'redux';

import { SET_TIME_SERIES, SET_TIME_SERIES_ERROR } from './constants';
import { ActionSet } from './defaults';
import { TimeSeries, fetchTimeSeries } from '../util';
import { TimeSeriesRange } from '../util/services/types';

export interface SetTimeSeriesAction {
  type: typeof SET_TIME_SERIES;
  payload: TimeSeries;
  range: TimeSeriesRange;
}

export type TimeSeriesAction = SetTimeSeriesAction | ActionSet<string>;

export const setTimeSeries: ActionCreator<TimeSeriesAction> = (
  payload: TimeSeries,
  range: TimeSeriesRange
): TimeSeriesAction => ({ type: SET_TIME_SERIES, payload, range });

export const setTimeSeriesError: ActionCreator<TimeSeriesAction> = (
  payload: string
): TimeSeriesAction => ({ type: SET_TIME_SERIES_ERROR, payload });

export const getTimeSeries: ActionCreator<
  ThunkAction<Promise<void>, {}, {}, TimeSeriesAction>
> = (
  companySymbol: string,
  range: TimeSeriesRange
): ThunkAction<Promise<void>, {}, {}, TimeSeriesAction> => async (
  dispatch: ThunkDispatch<{}, {}, TimeSeriesAction>
) => {
  fetchTimeSeries(companySymbol, range)
    .then(response => {
      dispatch(setTimeSeries(response, range));
    })
    .catch(error => {
      dispatch(setTimeSeriesError(error));
    });
};
